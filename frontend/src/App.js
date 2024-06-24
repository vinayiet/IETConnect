import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DownloadPage from './components/DownloadPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </>
  );
}

export default App;
