import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import HeaderSection from './components/header';
import Footer from './components/footer';
import UploadPage from './components/upload';
import DownloadPage from './components/download';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroSection />
        <HeaderSection />
        
        <Footer />
        
      </div>
      <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
    </Router>
  );
}

export default App;
