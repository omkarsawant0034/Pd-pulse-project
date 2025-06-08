import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './GloveOrderForm.css';

const GloveOrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    house: '',
    street: '',
    area: '',
    city: '',
    state: '',
    zip: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_mla8pdp',
      'template_ac6w7gk',
      formData,
      'Xge-2Y2nFNKwflVbz'
    ).then(() => {
      setStatus("✅ Order submitted! We'll contact you soon.");
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        house: '',
        street: '',
        area: '',
        city: '',
        state: '',
        zip: '',
      });
    }).catch(() => {
      setStatus("❌ Failed to submit. Please try again.");
    });
  };

  return (
    <div className="glove-page-container">
      <div className="left-info">
        <h1>Empower Movement with PD Pulse Gloves</h1>
        <p>Our vibrotactile gloves are designed to assist Parkinson’s patients by providing rhythmic stimulation that can reduce tremors and improve motor control.</p>
        <ul>
          <li>🔧 Built-in flat vibration motors</li>
          <li>🔋 Rechargeable battery with 4+ hour usage</li>
          <li>🕒 Delivery within 7-10 working days</li>
          <li>💬 Support included after purchase</li>
        </ul>
        
        {/* <img
          src="/PD_Glove.png"
          alt="Parkinson glove illustration"
          className="glove-illustration"
          style={{
            width: '300px',
            height: 'auto',
            marginTop: '1px',
            marginLeft: '60px',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
          }}
        /> */}


      </div>

      <div className="order-form-container">
        <h2>Glove Order Form</h2>
        <form onSubmit={handleSubmit} className="glove-form">
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} value={formData.fullName} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} value={formData.phone} />
          <input type="email" name="email" placeholder="Email Address (optional)" onChange={handleChange} value={formData.email} />
          <input type="text" name="house" placeholder="House/Flat Number" required onChange={handleChange} value={formData.house} />
          <input type="text" name="street" placeholder="Street/Road Name" required onChange={handleChange} value={formData.street} />
          <input type="text" name="area" placeholder="Area/Locality" required onChange={handleChange} value={formData.area} />
          <input type="text" name="city" placeholder="City" required onChange={handleChange} value={formData.city} />
          <input type="text" name="state" placeholder="State" required onChange={handleChange} value={formData.state} />
          <input type="text" name="zip" placeholder="PIN/ZIP Code" required onChange={handleChange} value={formData.zip} />

          <button type="submit">Submit Order</button>
          {status && <p className="status-msg">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default GloveOrderForm;
