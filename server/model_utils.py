# server/model_utils.py
import os
import gdown

def download_model():
    model_path = "model/parkinson_cnn_model.h5"

    if not os.path.exists(model_path):
        os.makedirs("model", exist_ok=True)
        print("🔽 Downloading model from Google Drive...")

        # Safe Google Drive file ID method
        url = "https://drive.google.com/uc?id=1cus-ccaFIQSKP_Tkd47eI8qhnX5gqPSI"
        gdown.download(url, model_path, quiet=False, fuzzy=True)

        print("✅ Model downloaded.")
    else:
        print("📦 Model already exists locally.")
