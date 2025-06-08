import React from 'react';
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">PD Pulse</Link>

        <button
          className="navbar-toggler text-white border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/prediction">Prediction</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/order-glove">Order Glove</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/testimonials">Testimonials</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/doctor">DoctorDash</NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-4" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}

            {!currentUser && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#!"
                  id="authDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sign In / Login
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/register">Sign Up</NavLink></li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
