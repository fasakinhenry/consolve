import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
