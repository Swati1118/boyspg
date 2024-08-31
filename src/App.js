// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhotoSlider from './components/PhotoSlider';
import Footer from './components/Footer';
import AmenitiesPage from './pages/AmenitiesPage';
// Import other pages as needed
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import SignupPage from './pages/SignupPage';
// import SigninPage from './pages/SigninPage';
// import AdminPage from './pages/AdminPage';
// import StudentPage from './pages/StudentPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ContentWithConditionalSlider />
        <Footer />
      </div>
    </Router>
  );
};

// Component to conditionally render PhotoSlider based on route
const ContentWithConditionalSlider = () => {
  const location = useLocation();

  return (
    <>
      {/* Render PhotoSlider only on the home page */}
      {location.pathname === '/' && <PhotoSlider />}
      <Routes>
       
        <Route path="/amenities" element={<AmenitiesPage />} />
        {/* Uncomment and define other routes as needed */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* <Route path="/signin" element={<SigninPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        {/* <Route path="/student" element={<StudentPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
