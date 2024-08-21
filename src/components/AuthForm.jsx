import React, { useState } from 'react';

const AuthForm = ({ formType, onSubmit, switchFormType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <div className="auth-form">
      <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{formType === 'login' ? 'Login' : 'Register'}</button>
      </form>
      <p onClick={switchFormType} style={{ cursor: 'pointer', color: 'blue' }}>
        {formType === 'login' ? 'No account? Register here' : 'Already have an account? Login here'}
      </p>
    </div>
  );
};

export default AuthForm;
