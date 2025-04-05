import './App.css';
import HomePage from './components/HomePage.tsx';
import LoginPage from './components/LoginPage.tsx';
import AddReservationPage from './components/AddReservation.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
          <Routes>
                <Route path="/" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
                <Route path="/addReservation" element={<AddReservationPage />} />
          </Routes>
        </Router>
    )
   
}

export default App;
