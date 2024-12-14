/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Signup from '../auth/Signup/Signup';
import Dashboard from '../../Dashboard/Dashboard';
import Verification from '../auth/Verification/Verification';
import ResetPassword from '../auth/ResetPassword/ResetPassword';
import Forgotpass from '../auth/Forgotpass/Forgotpass';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    window.location.href = '/';
    return null;
  }

  return element;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/Verification/:token" element={<Verification />} />
        <Route path="/Forgotpass" element={<Forgotpass />} />
        <Route path="/ResetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
