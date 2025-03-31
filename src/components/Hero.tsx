
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.animate-fadeIn');
    fadeInElements.forEach((element, index) => {
      const el = element as HTMLElement;
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h4 className="font-rajdhani text-xl text-primary animate-fadeIn">Welcome to my profile</h4>
            <h1 className="font-rajdhani text-5xl md:text-6xl font-bold animate-fadeIn">
              I'm <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Patrick Josh</span> Musni
            </h1>
            <p className="text-white/70 text-lg animate-fadeIn">
              Student at San Beda College Alabang, aspiring developer, and digital artist.
            </p>
            <div className="pt-4 animate-fadeIn">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-contact"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center animate-fadeIn">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-purple-900/20 to-indigo-900/30 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
              <div className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full bg-card border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <span className="block text-4xl md:text-6xl font-rajdhani font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">PJM</span>
                  <span className="block mt-2 text-lg text-white/80">Grade 10 Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
