import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../auth/Login/Login'
import Signup from '../auth/Signup/Signup';
import Verification from '../auth/Verification/Verification';
import ResetPassword from '../auth/ResetPassword/ResetPassword';
import Forgotpass from '../auth/Forgotpass/Forgotpass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgotpass" element={<Forgotpass />} />
        <Route path="/ResetPassword/:token" element={<ResetPassword />} />
        <Route path="/Verification/:token" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
