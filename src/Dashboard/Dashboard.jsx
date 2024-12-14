import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Importing the custom CSS file

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to the Dashboard</h2>
        <p>Your session is active</p>
      </div>
      <div className="dashboard-content">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
