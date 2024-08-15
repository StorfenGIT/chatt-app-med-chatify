import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { AuthProvider } from './protectedroutes/authcontext';
import ProtectedRoute from './protectedroutes/protectedroutes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
