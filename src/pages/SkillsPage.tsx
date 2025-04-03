
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const SkillsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Skills - Patrick Josh Musni</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
