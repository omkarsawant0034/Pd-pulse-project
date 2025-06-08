// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import Register from './components/Register';
import Prediction from './components/Prediction';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import GloveOrderForm from './components/GloveOrderForm';
import DoctorDashboard from './components/DoctorDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Routes>
          {/* Unprotected routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes (including "/" and "/home") */}
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/prediction" element={<PrivateRoute element={<Prediction />} />} />
          <Route path="/order-glove" element={<PrivateRoute element={<GloveOrderForm />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
          <Route path="/testimonials" element={<PrivateRoute element={<Testimonials />} />} />
          <Route path="/doctor" element={<PrivateRoute element={<DoctorDashboard />} />} />

          <Route path="*" element={<div className="text-center p-5 text-danger">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
