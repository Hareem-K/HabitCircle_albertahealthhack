import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import UserSelect from './Pages/UserSelect';
import FamilySignUp from './Pages/FamilySignUp';
import AdminSignUp from './Pages/AdminSignUp';
import MainDashboard from './Pages/MainDashboard';
import PatientDashboard from './Pages/PatientDashboard';
//import Wordle from './Pages/UnlockedGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/userselect" element={<UserSelect />} />
        <Route path="/admin" element={<AdminSignUp />} />
        <Route path="/family-signup" element={<FamilySignUp />} />
        <Route path="/patientDashboard" element={<PatientDashboard />} />
        <Route path="/mainDashboard" element={<MainDashboard />} />
        {/* <Route path="/unLock" element={<UnlockedGame />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
