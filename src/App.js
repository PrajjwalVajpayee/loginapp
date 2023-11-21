
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Login'
import RegistrationPage from './Components/Registration'
import Thankyupage from './Components/Thankyupage';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/thankyou" element={<Thankyupage />} />
    </Routes>
  </Router>
  );
}

export default App;
