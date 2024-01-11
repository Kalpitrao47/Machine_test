import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import GradientAbout from './Components/GradientAbout';
import SocialLogo from './Components/SocialLogo';
import TopProfile from './Components/TopProfile';
import AboutUs from './Components/AboutUs';
import Plan from './Components/Plan';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Shop from './Components/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Header />
      <GradientAbout />
      <SocialLogo />
      <TopProfile />
      <Plan />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
