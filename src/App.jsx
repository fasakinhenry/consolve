// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Providers from './pages/Providers';
import Inbox from './pages/Inbox';
import Appointments from './pages/Appointments';
import Community from './pages/Community';
import Services from './pages/Services';
import Wallet from './pages/Wallet';
import Logistics from './pages/Logistics';
import Bounties from './pages/Bounties';
import Events from './pages/Events';
import Tools from './pages/Tools';
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
        <Route
          path='/inbox'
          element={
            <MainLayout>
              <Inbox />
            </MainLayout>
          }
        />
        <Route
          path='/appointments'
          element={
            <MainLayout>
              <Appointments />
            </MainLayout>
          }
        />
        <Route
          path='/community'
          element={
            <MainLayout>
              <Community />
            </MainLayout>
          }
        />
        <Route
          path='/services'
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path='/wallet'
          element={
            <MainLayout>
              <Wallet />
            </MainLayout>
          }
        />
        <Route
          path='/logistics'
          element={
            <MainLayout>
              <Logistics />
            </MainLayout>
          }
        />
        <Route
          path='/bounties'
          element={
            <MainLayout>
              <Bounties />
            </MainLayout>
          }
        />
        <Route
          path='/events'
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
        <Route
          path='/tools'
          element={
            <MainLayout>
              <Tools />
            </MainLayout>
          }
        />
        {/* Add other routes within MainLayout as needed */}
      </Routes>
    </Router>
  );
}

export default App;
