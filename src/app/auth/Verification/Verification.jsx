import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Verification.css';

export default function Verification() {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/auth/verify-email/${token}`);
        setMessage(response.data.message);
      } catch (err) {
        setMessage('Invalid or expired token');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Email Verification</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
