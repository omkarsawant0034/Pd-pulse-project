import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  EmailAuthProvider,
  linkWithCredential
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import './Login.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import googleLogo from '../assets/google_logo.png'; // 🧠 Add your logo path here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      setError('');
      let userCredential;
      if (isRegister) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Registered successfully!");
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      }
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      navigate("/");
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (isRegister) {
        const password = prompt("Set a password for future login:");
        if (password) {
          const credential = EmailAuthProvider.credential(user.email, password);
          await linkWithCredential(user, credential);
          alert("Password linked. You can now log in with email/password too.");
        }
      }

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      setError("Google login failed: " + err.message);
    }
  };

  return (
    <div className="auth-bg">
      <div className="login-box">
        <h2 className="text-center mb-4">{isRegister ? 'Register' : 'Login'}</h2>

        {error && <div style={{ color: '#d9534f', fontSize: '0.9rem', marginBottom: '12px' }}>{error}</div>}

        <form onSubmit={handleAuth}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="position-relative mb-3">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2">
          <img src={googleLogo} alt="Google Logo" style={{ width: '20px', height: '20px' }} />
          <span>{isRegister ? 'Register with Google' : 'Sign in with Google'}</span>
        </button>

        <p className="text-center mt-3">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button className="toggle-btn" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
