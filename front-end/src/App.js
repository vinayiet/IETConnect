import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import HeaderSection from './components/header';
import Footer from './components/footer';
import UploadPage from './components/upload';
import DownloadPage from './components/download';
import SignInSide from './components/Signin';
import PhotosDetails from './components/photosDetails';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <PhotosDetails />
                <HeaderSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <SignInSide />
              </>
            }
          />
          <Route
          path="/upload"
          element={
            <>
              <Navbar />
              <HeaderSection />
              <UploadPage />
              <Footer />
            </>
          }
          />
            <Route
          path="/download"
          element={
            <>
              <Navbar />
              
              <DownloadPage />
              <Footer />
            </>
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
