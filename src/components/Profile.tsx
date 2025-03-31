
import React from 'react';
import { Calendar, Ruler, GraduationCap } from 'lucide-react';

const Profile = () => {
  return (
    <section id="profile" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Personal Profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="stat-card group">
            <div className="flex items-start">
              <div className="mr-4">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-rajdhani font-semibold mb-1">Birthdate</h3>
                <p className="text-white/70">June 14, 2009</p>
                <div className="mt-2 text-white/50 text-sm">14 years old</div>
              </div>
            </div>
          </div>
          
          <div className="stat-card group">
            <div className="flex items-start">
              <div className="mr-4">
                <Ruler className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-rajdhani font-semibold mb-1">Height</h3>
                <p className="text-white/70">170 cm</p>
                <div className="mt-2 text-white/50 text-sm">5'7"</div>
              </div>
            </div>
          </div>
          
          <div className="stat-card group">
            <div className="flex items-start">
              <div className="mr-4">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-rajdhani font-semibold mb-1">Education</h3>
                <p className="text-white/70">Grade 10</p>
                <div className="mt-2 text-white/50 text-sm">San Beda College Alabang</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-card p-6 rounded-lg border border-border/30">
            <h3 className="text-xl font-rajdhani font-semibold mb-4">About Me</h3>
            <p className="text-white/70 leading-relaxed">
              I'm a Grade 10 student at San Beda College Alabang with a passion for coding and digital art. When I'm not studying, you can find me gaming, drawing, or catching up on sleep. I'm constantly developing my skills and looking forward to growing in the tech and creative fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
