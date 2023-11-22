// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';  // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = async () => {
    try {
      // Send the email to the backend to initiate OTP generation
      const response = await axios.post('/api/generate-otp', { email });
      console.log(response.data);

      // Redirect to the OTP verification page
      navigate(`/verify-otp/${email}`);
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
      console.error(error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      // Send the entered OTP to the backend for verification
      const response = await axios.post('/api/verify-otp', { email, otp });
      console.log(response.data);

      // If OTP verification is successful, redirect to the registration page
      navigate('/registration');
    } catch (error) {
      setError('Invalid OTP. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleSendOTP} className="btn-primary">
        Send OTP
      </button>

      {/* Only show OTP input and verification button if an email is entered */}
      {email && (
        <div className="form-group">
         <div className='cont1'> <label >OTP:</label></div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="input-field"
          />
          <button onClick={handleVerifyOTP} className="btn-verify-otp">
            Verify OTP
          </button>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
