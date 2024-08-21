import React from 'react';
import AuthForm from './AuthForm';

const LoginPage = ({ switchToRegister, onLogin }) => {
  const handleLogin = (credentials) => {
    onLogin(credentials);
  };

  return (
    <div className="login-page">
      <AuthForm formType="login" onSubmit={handleLogin} switchFormType={switchToRegister} />
    </div>
  );
};

export default LoginPage;
