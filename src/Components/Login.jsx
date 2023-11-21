// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import axios from 'axios';
import './login.css'
const Login = () => {
  const navigate = useNavigate();  // Replace useHistory with useNavigate
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = async () => {
    try {
      // Send the email to the backend to initiate OTP generation
      const response = await axios.post('/api/generate-otp', { email });
      console.log(response.data); // Assuming the backend returns some confirmation message

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
      console.log(response.data); // Assuming the backend returns some confirmation message

      // If OTP verification is successful, redirect to the registration page
      navigate('/registration');
    } catch (error) {
      setError('Invalid OTP. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className='cont' >
      <h2>Login</h2>
      <div  >
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleSendOTP}>Send OTP</button>

      {/* Only show OTP input and verification button if an email is entered */}
      {email && (
        <div>
          <label>OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
