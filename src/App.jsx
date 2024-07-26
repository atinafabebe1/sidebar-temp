// App.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Signin from './pages/auth/Signin';
import MainOutlet from './components/Mainoutlet';
import { useUser } from './context/userContext';
import DisplaySchool from './pages/school/DisplaySchool';

function App() {
  const location = useLocation();
  const { user, loading } = useUser();

  useEffect(() => {
    const html = document.querySelector('html');
    html.style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    html.style.scrollBehavior = '';
  }, [location.pathname]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<MainOutlet />}>
        <Route index element={user ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/schools" element={<DisplaySchool />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
