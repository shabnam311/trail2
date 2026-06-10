import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import AvatarSetupPage from './pages/AvatarSetupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/setup-avatar" element={<AvatarSetupPage />} />
        
        <Route path="/" element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="games" element={<div className="text-center mt-20 text-xl font-bold text-gray-400">Games Module Coming Soon</div>} />
          <Route path="path" element={<div className="text-center mt-20 text-xl font-bold text-gray-400">Path Tracker Coming Soon</div>} />
          <Route path="stocks" element={<div className="text-center mt-20 text-xl font-bold text-gray-400">Stocks Module Coming Soon</div>} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
