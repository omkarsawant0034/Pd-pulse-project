// context/AuthContext.jsx
import React, { useContext, useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import './AuthContext.css'; // 👈 Create this CSS file

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {loading ? (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
