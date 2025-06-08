import React, { useState } from 'react';
import axios from 'axios';
import './Prediction.css';

const Prediction = () => {
  const [spiralImage, setSpiralImage] = useState(null);
  const [waveImage, setWaveImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!spiralImage || !waveImage) {
      alert("Please select both Spiral and Wave images");
      return;
    }

    const formData = new FormData();
    formData.append("spiralImage", spiralImage);
    formData.append("waveImage", waveImage);

    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      setPrediction(res.data.prediction);
      setConfidence(res.data.confidence);
    } catch (err) {
      console.error("Prediction failed", err);
      setPrediction("Error occurred");
      setConfidence("");
    }
  };

  return (
    <div className="prediction-deep-wrapper">
      <div className="neural-bg"></div>

      <div className="prediction-container">
        <h2 className="title">Parkinson's Disease Prediction Using CNN</h2>

        <div className="cnn-section">
          <p className="cnn-desc">
            Our deep learning model scans spiral & wave drawings to detect Parkinson’s symptoms.
            It uses <strong>Convolutional Neural Networks</strong> (CNNs) to learn patterns in your handwriting like tremors or distortions.
          </p>
        </div>

        <div className="steps-container">
          <h3>🧾 Steps to Upload:</h3>
          <div className="steps">
            <div className="step fade-in">
              <img src="./icon/paper.png" alt="Step 1" />
              <p><strong>1.</strong> Take a clean white sheet and pen.</p>
            </div>
            <div className="step fade-in delay-1">
              <img src="./icon/spiral.png" alt="Step 2" />
              <p><strong>2.</strong> Draw a Spiral and Wave pattern.</p>
            </div>
            <div className="step fade-in delay-2">
              <img src="./icon/capture.png" alt="Step 3" />
              <p><strong>3.</strong> Capture clear photos of both.</p>
            </div>
            <div className="step fade-in delay-3">
              <img src="./icon/upload.png" alt="Step 4" />
              <p><strong>4.</strong> Upload both images below.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="input-group">
            <label>Spiral Image:</label>
            <input type="file" accept="image/*" onChange={(e) => setSpiralImage(e.target.files[0])} />
          </div>
          <div className="input-group">
            <label>Wave Image:</label>
            <input type="file" accept="image/*" onChange={(e) => setWaveImage(e.target.files[0])} />
          </div>
          <button type="submit" className="predict-button">Predict</button>
        </form>

       {prediction && (
  <div
    className={`result-section ${prediction.toLowerCase().includes("parkinson") ? "result-red" : "result-green"}`}
  >
    <h3 className="result">🧠 Prediction: {prediction}</h3>
    <p className="confidence">Confidence: <strong>{confidence}</strong></p>
  </div>
)}


      </div>
    </div>
  );
};

export default Prediction;
