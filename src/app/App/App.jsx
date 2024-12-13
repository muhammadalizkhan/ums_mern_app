import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Signup from '../auth/Signup/Signup';
import Dashboard from '../../Dashboard/Dashboard';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    // If there's no token, redirect to login page
    window.location.href = '/';
    return null;  // Prevent the rest of the component from rendering
  }

  return element;  // If there's a token, show the dashboard
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
}

export default App;
