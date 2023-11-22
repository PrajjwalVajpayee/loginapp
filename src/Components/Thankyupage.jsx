// ThankYouPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYouPage = () => {
  return (
    <div className='thank-you-container'>
      <h2>Thank You!</h2>
      <p className='message'>Your registration was successful.</p>
      <Link to='/' className='back-to-home'>Back to Home</Link>
    </div>
  );
};

export default ThankYouPage;

