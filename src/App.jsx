import React, { useState } from "react";
import AuthForm from "./components/authform";
import Message from "./components/message";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // new state for message type (error/success)

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const handleRegister = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setMessageType("error");
      setMessage("User already exists.");
    } else {
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setMessageType("success");
      setMessage("Registration successful. Please log in.");
      setIsLogin(true);
    }
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setMessageType("success");
      setMessage("Login successful!");
    } else {
      setMessageType("error");
      setMessage("Invalid email or password.");
    }
  };

  const handleSubmit = (email, password) => {
    if (isLogin) {
      handleLogin(email, password);
    } else {
      handleRegister(email, password);
    }
  };

  return (
    <div style={styles.container}>
      <AuthForm
        isLogin={isLogin}
        onToggleForm={toggleForm}
        onSubmit={handleSubmit}
      />
      <Message message={message} type={messageType} /> {/* Properly use Message component */}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
};

export default App;
