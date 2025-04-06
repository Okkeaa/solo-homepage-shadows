
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
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
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/profile" 
              className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
            >
              Profile
            </Link>
            <Link 
              to="/hobbies" 
              className={`nav-item ${isActive('/hobbies') ? 'active' : ''}`}
            >
              Hobbies
            </Link>
            <Link 
              to="/skills" 
              className={`nav-item ${isActive('/skills') ? 'active' : ''}`}
            >
              Skills
            </Link>
            <Link 
              to="/about" 
              className={`nav-item ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
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
          <Link 
            to="/"
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/profile"
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Profile
          </Link>
          <Link 
            to="/hobbies"
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hobbies
          </Link>
          <Link 
            to="/skills"
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link 
            to="/about"
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact"
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
