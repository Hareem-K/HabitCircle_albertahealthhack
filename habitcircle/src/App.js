import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import AdminSignUp from './Pages/AdminSignUp';
import MainDashboard from './Pages/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Admin" element={<AdminSignUp />} />
        <Route path="/mainDashboard" element={<MainDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
