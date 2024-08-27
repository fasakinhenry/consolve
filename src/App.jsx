// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Providers from './pages/Providers';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path='/providers'
          element={
            <MainLayout>
              <Providers />
            </MainLayout>
          }
        />
        {/* Add other routes within MainLayout as needed */}
      </Routes>
    </Router>
  );
}

export default App;
