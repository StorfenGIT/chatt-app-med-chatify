import React, { useState } from "react";
import Message from "./message";

// isLogin avgör om formuläret är i inloggningsläge (Log in) eller registreringsläge (register)
const AuthForm = ({ isLogin, onToggleForm, onSubmit }) => {
  
  // Man loggar in med mejladress och lösenord, kommer eventuellt ändra det till användarnamn istället för mejl 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div style={styles.formContainer}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <div onClick={onToggleForm} style={styles.toggleLink}>
        {isLogin
          ? "Don't have an account? Register here."
          : "Already have an account? Login here."}
      </div>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
  toggleLink: {
    textAlign: "center",
    marginTop: "10px",
    cursor: "pointer",
    color: "#007BFF",
    textDecoration: "underline",
  },
};

export default AuthForm;
