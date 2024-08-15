import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Handle registration logic here
    // After successful registration, redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        {/* Registration form fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
