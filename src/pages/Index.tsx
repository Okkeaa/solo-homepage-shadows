
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Patrick Josh Musni - Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
