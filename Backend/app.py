# app.py
import io
import os
import json
import numpy as np
from PIL import Image
from flask import Flask, request, jsonify, render_template, send_from_directory
import joblib
from flask_cors import CORS

# TensorFlow preprocessing and model building
import tensorflow as tf
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.applications.efficientnet import preprocess_input
from tensorflow.keras import Model

# ----- CONFIG -----
SAVE_DIR = os.path.join(os.getcwd(), "models")
IMAGE_SIZE = (224, 224)
TOP_K = 3
THRESHOLD = 0.7   # 🔥 IMPORTANT: tune this value
# ------------------

app = Flask(__name__, static_folder="static", template_folder="templates")
CORS(app)

# ---- load artifacts ----
svm_path = os.path.join(SAVE_DIR, "svm_model.joblib")
scaler_path = os.path.join(SAVE_DIR, "scaler.joblib")
le_path = os.path.join(SAVE_DIR, "label_encoder.joblib")
pca_path = os.path.join(SAVE_DIR, "pca.joblib")

if not os.path.exists(svm_path):
    raise FileNotFoundError(f"SVM model not found at {svm_path}")

svm = joblib.load(svm_path)
scaler = joblib.load(scaler_path) if os.path.exists(scaler_path) else None
le = joblib.load(le_path)
pca = joblib.load(pca_path) if os.path.exists(pca_path) else None
class_names = list(le.classes_)

# ---- Feature extractor ----
base = EfficientNetB0(
    weights="imagenet",
    include_top=False,
    pooling="avg",
    input_shape=(IMAGE_SIZE[0], IMAGE_SIZE[1], 3)
)
base.trainable = False
feature_model = Model(inputs=base.input, outputs=base.output)

# ---- Image Preprocessing ----
def prepare_image(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize(IMAGE_SIZE)
    arr = np.array(img).astype("float32")
    arr = preprocess_input(arr)
    arr = np.expand_dims(arr, axis=0)
    return arr

# ---- Routes ----
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html", classes=class_names)

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    try:
        image_bytes = file.read()
        img_arr = prepare_image(image_bytes)

        # ---- Feature Extraction ----
        feats = feature_model.predict(img_arr)

        # ---- Scaling ----
        if scaler is not None:
            feats = scaler.transform(feats)

        # ---- PCA ----
        if pca is not None:
            feats = pca.transform(feats)

        # ---- Prediction ----
        probs = svm.predict_proba(feats)[0]

        top_idxs = np.argsort(probs)[::-1][:TOP_K]
        top = [
            {
                "class": class_names[int(i)],
                "probability": float(probs[int(i)])
            }
            for i in top_idxs
        ]

        best_idx = int(top_idxs[0])
        best_prob = float(probs[best_idx])

        # Logic for non leaf image rejection and show error
        if best_prob < THRESHOLD:
            return jsonify({
                "error": "Please upload a rice leaf image only"
            })

        
        result = {
            "predicted_class": class_names[best_idx],
            "confidence": best_prob,
            "top_k": top,
            "all_probs": {
                class_names[i]: float(probs[i])
                for i in range(len(class_names))
            }
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ---- Download Models ----
@app.route("/models/<path:filename>")
def models(filename):
    return send_from_directory(SAVE_DIR, filename, as_attachment=True)

# ---- Run App ----
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)