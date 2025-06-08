import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 data-aos="fade-down">
          About <span className="highlight">PD Pulse</span>
        </h1>
        <p data-aos="fade-up">
          Empowering Healthcare with AI — Created by:<br />
          <strong>Omkar Sawant</strong>, <strong>Samarth Kasu</strong>, <strong>Shravani Kadav</strong>, <strong>Vaishnavi Raut</strong>
        </p>
      </section>

      <section className="about-cards container">
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="info-card">
              <img
                src="./icon/ai.png"
                alt="AI Detection"
                className="icon-img"
              />
              <h5>AI-Powered Diagnosis</h5>
              <p>
                We use CNNs trained on biomedical sketches to detect subtle motor symptoms of Parkinson’s Disease before clinical signs appear.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
            <div className="info-card">
              <img
                src="./icon/deep-learning.png"
                alt="CNN Model"
                className="icon-img"
              />
              <h5>Deep Learning Model</h5>
              <p>
                Our custom CNN model mimics the human visual cortex, scanning spirals and waves to recognize pathological patterns.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="info-card">
              <img
                src="./icon/innovation.png"
                alt="Innovation"
                className="icon-img"
              />
              <h5>Mission-Driven Innovation</h5>
              <p>
                We bridge AI and medicine to democratize Parkinson’s detection with non-invasive, scalable, and tech-forward solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack container mt-5" data-aos="fade-up">
        <h4 className="text-center mb-4">Core Technologies Behind PD Pulse</h4>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <img src="./icon/react.svg" className="icon-img" alt="React" />
            <p><strong>ReactJS</strong><br />For fast, responsive UI</p>
          </div>
          <div className="col-md-4 mb-3">
            <img src="./icon/keras.png" className="icon-img" alt="TensorFlow" />
            <p><strong>TensorFlow / Keras</strong><br />For training deep learning models</p>
          </div>
          <div className="col-md-4 mb-3">
            <img src="./icon/python.png" className="icon-img" alt="Python" />
            <p><strong>Python & Flask</strong><br />For backend model serving</p>
          </div>
        </div>
      </section>


      <section className="mission-box container" data-aos="fade-up">
        <h4>Our Vision</h4>
        <p>
          To make Parkinson's detection smart, accessible, and early. PD Pulse integrates clinical insight with neural network intelligence to detect anomalies in everyday handwriting tasks. With the power of CNNs, we push the boundaries of healthcare diagnostics.
        </p>
      </section>

      <section className="mission-box container mt-4" data-aos="fade-up">
        <h4>About the Team</h4>
        <p>
          PD Pulse is built by passionate final-year engineering students focused on impactful AI applications. From model training to responsive UI, every layer of this project is designed with compassion, accuracy, and future-readiness in mind.
        </p>
      </section>
    </div>
  );
};

export default About;
