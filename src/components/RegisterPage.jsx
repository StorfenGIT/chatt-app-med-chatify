import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../App.css";
const Register = ({ csrfToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
      email,
      csrfToken,
    };

    fetch("https://chatify-api.up.railway.app/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Användarnamn eller email finns redan!");
        }
        
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        navigate("/login", { state: { message: "Grattis! Du har registrerat dig!" } });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-light text-center mb-8 text-white tracking-wide">
          Här registrerar du dig
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <p className="text-green-500 text-center mb-4">
          Har du redan ett konto?{" "}
          <NavLink to="/login" className="text-blue-500 underline">
            Klicka här
          </NavLink>
        </p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-full bg-gray-800 text-white placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-full bg-gray-800 text-white placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-full bg-gray-800 text-white placeholder-gray-400"
            />
          </div>
        
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            Registrera
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

