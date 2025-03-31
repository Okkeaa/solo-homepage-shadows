
import React from 'react';
import { Gamepad2, Pen, Moon } from 'lucide-react';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Hobbies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="hobby-card">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-rajdhani font-semibold mb-2">Playing Video Games</h3>
            <p className="text-white/70 text-center">
              I enjoy immersing myself in different game worlds, especially RPGs and strategy games that challenge my mind.
            </p>
          </div>
          
          <div className="hobby-card">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Pen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-rajdhani font-semibold mb-2">Drawing</h3>
            <p className="text-white/70 text-center">
              Digital art allows me to express my creativity and bring my imagination to life through illustrations and character designs.
            </p>
          </div>
          
          <div className="hobby-card">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Moon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-rajdhani font-semibold mb-2">Sleeping</h3>
            <p className="text-white/70 text-center">
              A good rest recharges my creativity and helps me stay focused on my studies and projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
