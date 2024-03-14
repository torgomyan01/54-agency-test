import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SITE_URL } from './utils/const';
import './App.scss';
import PageNotFound from './pages/404/404';
import AlertSite from './features/alert/alert';
import Home from './pages/home/home';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={SITE_URL.HOME} element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <AlertSite />
    </>
  );
}

export default App;