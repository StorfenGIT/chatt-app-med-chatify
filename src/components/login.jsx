import React from 'react';
import { useAuth } from './authcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    login(); // Set authenticated status
    navigate('/dashboard'); // Redirect to the protected route
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        {/* Login form fields */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
