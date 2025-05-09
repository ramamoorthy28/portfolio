import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HotelBookingApp from './components/HotelBookingApp';
import FoodDeliveryApp from './components/FoodDeliveryApp';
import BlogWebsite from './components/BlogWebsite';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Resume />
                <Contact />
                <Footer />
                <WhatsAppButton />
              </>
            }
          />

          {/* Redirect /portfolio to main page */}
          <Route path="/portfolio" element={<Navigate to="/" />} />

          {/* Project-specific Pages */}
          <Route path="/projects/hotel-booking-app" element={<HotelBookingApp />} />
          <Route path="/projects/food-delivery-app" element={<FoodDeliveryApp />} />
          <Route path="/projects/blog-website" element={<BlogWebsite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
