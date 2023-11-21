import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationPage = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistrationSubmit = async () => {
    try {
      // Send student data to the backend API for insertion into the database
      const response = await axios.post('/api/register-student', studentData);
      
      // Assuming the backend returns a success message
      console.log(response.data);

      // Redirect to the thank you page upon successful registration
      navigate('/thankyou');
    } catch (error) {
      setError('Failed to register student. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={studentData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={studentData.age} onChange={handleInputChange} />
      </div>
      {/* Add more input fields for other student information */}
      <button onClick={handleRegistrationSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
