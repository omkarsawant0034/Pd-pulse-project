from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from PIL import Image
import numpy as np
import tensorflow as tf
import shutil
from datetime import datetime
from model_utils import download_model

app = Flask(__name__)
CORS(app)

BASE_UPLOAD = "uploads"
MODEL_PATH = "model/parkinson_cnn_model.h5"

# Create upload folder if not exists
os.makedirs(BASE_UPLOAD, exist_ok=True)

# Step 1: Download model if not available
download_model()

# Step 2: Load the model
model = tf.keras.models.load_model(MODEL_PATH)

def preprocess_image(image_path):
    img = Image.open(image_path).convert("L")
    img = img.resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    img_array = np.expand_dims(img_array, axis=-1)
    return img_array

def save_to_category(prediction_result, spiral_path, wave_path):
    category = "Parkinson" if prediction_result else "Healthy"
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")

    spiral_target_dir = os.path.join(BASE_UPLOAD, category, "spiral")
    wave_target_dir = os.path.join(BASE_UPLOAD, category, "wave")

    os.makedirs(spiral_target_dir, exist_ok=True)
    os.makedirs(wave_target_dir, exist_ok=True)

    spiral_target_path = os.path.join(spiral_target_dir, f"spiral_{timestamp}.png")
    wave_target_path = os.path.join(wave_target_dir, f"wave_{timestamp}.png")

    shutil.move(spiral_path, spiral_target_path)
    shutil.move(wave_path, wave_target_path)

@app.route('/predict', methods=['POST'])
def predict():
    if 'spiralImage' not in request.files or 'waveImage' not in request.files:
        return jsonify({'error': 'Both spiral and wave images are required'}), 400

    spiral_file = request.files['spiralImage']
    wave_file = request.files['waveImage']

    spiral_temp_path = os.path.join(BASE_UPLOAD, spiral_file.filename)
    wave_temp_path = os.path.join(BASE_UPLOAD, wave_file.filename)

    spiral_file.save(spiral_temp_path)
    wave_file.save(wave_temp_path)

    spiral_input = preprocess_image(spiral_temp_path)
    wave_input = preprocess_image(wave_temp_path)

    prediction = model.predict([spiral_input, wave_input])

    predicted_index = int(np.argmax(prediction[0]))
    confidence = float(prediction[0][predicted_index])
    result = "Parkinson Detected" if predicted_index == 1 else "Healthy"

    save_to_category(predicted_index == 1, spiral_temp_path, wave_temp_path)

    return jsonify({
        'prediction': result,
        'confidence': f"{confidence * 100:.2f}%"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))

