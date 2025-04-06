
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Hobbies from '../components/Hobbies';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
      });
    }

    // Add animation delay to fade-in elements
    const fadeInElements = document.querySelectorAll('.animate-fadeIn');
    fadeInElements.forEach((element, index) => {
      const el = element as HTMLElement;
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Patrick Josh Musni - Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Profile />
      <Hobbies />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
