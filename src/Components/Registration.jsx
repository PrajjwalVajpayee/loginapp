// RegistrationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';

const RegistrationPage = () => {
  const [studentData, setStudentData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    student_no: '',
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
    <div className='container'>
      <h2>Registration Page</h2>
      <div>
        <label>First Name:</label>
        <input type="text" placeholder='John' name="first_name" value={studentData.first_name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="last_name" placeholder='Keats' value={studentData.last_name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" placeholder='abc@gmail.com' value={studentData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Student No:</label>
        <input type="number" name='student_no' placeholder='' value={studentData.student_no} onChange={handleInputChange} />
      </div>
      {/* Add more input fields for other student information */}
      <button onClick={handleRegistrationSubmit}>Submit</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegistrationPage;
