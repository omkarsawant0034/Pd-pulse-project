# server/model_utils.py
import os
import requests

def download_model():
    # ✔️ Google Drive direct download link using file ID
    model_url = "https://drive.google.com/uc?id=1cus-ccaFIQSKP_Tkd47eI8qhnX5gqPSI&export=download"
    local_path = "model/parkinson_cnn_model.h5"

    if not os.path.exists("model"):
        os.makedirs("model")

    if not os.path.exists(local_path):
        print("🔽 Downloading model from Google Drive...")
        response = requests.get(model_url, stream=True)
        with open(local_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        print("✅ Model downloaded.")
    else:
        print("📦 Model already exists locally.")
