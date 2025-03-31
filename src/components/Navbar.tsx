
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <Link to="/" className="font-rajdhani font-bold text-2xl">
            <span className="text-white">Patrick</span>
            <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent"> Musni</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('profile')} 
              className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
            >
              Profile
            </button>
            <button 
              onClick={() => scrollToSection('hobbies')} 
              className={`nav-item ${activeSection === 'hobbies' ? 'active' : ''}`}
            >
              Hobbies
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'hidden'}`}>
        <div className="pt-20 pb-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="mobile-nav-item"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('profile')}
            className="mobile-nav-item"
          >
            Profile
          </button>
          <button 
            onClick={() => scrollToSection('hobbies')}
            className="mobile-nav-item"
          >
            Hobbies
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="mobile-nav-item"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="mobile-nav-item"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="mobile-nav-item"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
