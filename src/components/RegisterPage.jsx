import React from 'react';
import AuthForm from './LoginPage';

const RegisterPage = ({ switchToLogin, onRegister }) => {
  const handleRegister = (credentials) => {
    onRegister(credentials);
  };

  return (
    <div className="register-page">
      <AuthForm formType="register" onSubmit={handleRegister} switchFormType={switchToLogin} />
    </div>
  );
};

export default RegisterPage;
