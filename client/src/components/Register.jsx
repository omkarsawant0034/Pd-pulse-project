import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Error in registration: " + err.message);
    }
  };

  const inputStyle = {
    width: '100%',
    marginBottom: 10,
    padding: 8,
    paddingRight: 40,  // Same padding here too
  };

  const iconStyle = {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: 24,
    color: '#555'
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <div style={{ position: 'relative', marginBottom: 10 }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={iconStyle}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <button type="submit" style={{ width: '100%', padding: 10 }}>Register</button>
      </form>
      <p style={{ marginTop: 10 }}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
