import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  console.log("✅ Home component rendered!");

  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="content text-center text-white">
          <h1 className="display-4 fw-bold">Hope Begins with Early Detection</h1>
          <p className="lead mt-3">
            Empowering lives with AI-powered Parkinson's Prediction and Care.
          </p>
          <Link to="/prediction" className="btn btn-outline-light btn-lg mt-5">
              Predict Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
