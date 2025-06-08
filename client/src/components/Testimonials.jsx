import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Dr. Sharma",
      role: "Neurologist",
      message: "This tool gave us a new perspective on early detection. Truly game-changing.",
      rating: 5,
    },
    {
      name: "Sneha G.",
      role: "Parkinson's Patient",
      message: "The spiral and wave analysis made me feel seen. Thank you!",
      rating: 4,
    },
    {
      name: "Ramesh P.",
      role: "Caregiver",
      message: "Easy to use, fast to analyze. Helped my father so much.",
      rating: 5,
    },
  ]);

  const [formData, setFormData] = useState({ name: '', role: '', message: '', rating: 5 });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFeedbacks([...feedbacks, formData]);
    setFormData({ name: '', role: '', message: '', rating: 5 });
  };

  return (
    <div className="testimonials-section">
      <h2 className="section-title text-center mb-5">What People Are Saying</h2>

      <div className="marquee-container">
        <div className="marquee-track">
          {feedbacks.map((fb, idx) => (
            <div className="testimonial-card" key={idx}>
              <p className="message">"{fb.message}"</p>
              <h6 className="name">- {fb.name}</h6>
              <span className="role">{fb.role}</span>
              <div className="stars">{'⭐'.repeat(fb.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='feedback-section'>
        <div className="feedback-layout">
        <div className="feedback-side-panel">
          <h3>Share Your Experience</h3>
          <p>
            "Your voice helps us improve. Let us know how PD Pulse has helped you or someone you care about."
          </p>
          <img src="./icon/feedback.png" alt="Feedback" className="feedback-image" />
        </div>

          {/* Feedback Form */}
          <div className="feedback-form">
          <h4 className="mb-3">Leave Your Feedback</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Your Role (Doctor, Patient, etc)"
              value={formData.role}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <select name="rating" value={formData.rating} onChange={handleChange}>
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>

      </div>    
      

        
      </div>
    </div>
  );
};

export default Testimonials;
