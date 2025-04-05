import './App.css';
import HomePage from './components/HomePage.tsx';
import LoginPage from './components/LoginPage.tsx';
import Header from './components/Header.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   <Router>
      <Header logedin={false} /> {/* Set this dynamically based on login state */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        {/* Other routes */}
      </Routes>
    </Router>
}

export default App;
