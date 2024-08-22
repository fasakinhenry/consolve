import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
