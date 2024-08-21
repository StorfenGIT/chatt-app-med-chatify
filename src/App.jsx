import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Board';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [accounts, setAccounts] = useState([]); // State to store all accounts
  const [loggedInUser, setLoggedInUser] = useState(null); // State to store the logged-in user

  const handleRegister = (credentials) => {
    setAccounts((prevAccounts) => [...prevAccounts, credentials]); // Store the new account
    setIsLogin(true); // Switch to login after registration
  };

  const handleLogin = (credentials) => {
    const user = accounts.find(account => account.username === credentials.username && account.password === credentials.password);
    if (user) {
      setLoggedInUser(user); // Set the logged-in user
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <Dashboard user={loggedInUser} accounts={accounts} />
      ) : isLogin ? (
        <LoginPage switchToRegister={() => setIsLogin(false)} onLogin={handleLogin} />
      ) : (
        <RegisterPage switchToLogin={() => setIsLogin(true)} onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
