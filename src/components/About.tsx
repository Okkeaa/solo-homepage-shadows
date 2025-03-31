
import React from 'react';
import { User, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="bg-card p-6 rounded-lg border border-border/30 glow-effect flex flex-col items-center text-center">
            <User className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-rajdhani font-semibold mb-2">Who I Am</h3>
            <p className="text-white/70">
              A Grade 10 student at San Beda College Alabang with a passion for technology and art. I balance academics with creative pursuits and gaming.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border/30 glow-effect flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-rajdhani font-semibold mb-2">My Goals</h3>
            <p className="text-white/70">
              I aim to become proficient in software development and digital art, with aspirations to combine these skills in a future career in tech or game development.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border/30 glow-effect flex flex-col items-center text-center">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-rajdhani font-semibold mb-2">My Passion</h3>
            <p className="text-white/70">
              I'm driven by creating digital experiences that bring joy and solve problems. I love the process of turning ideas into reality through code and design.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-card p-8 rounded-lg border border-border/30">
            <h3 className="text-2xl font-rajdhani font-semibold mb-4">My Journey</h3>
            <div className="space-y-6 text-white/70">
              <p>
                My journey began with a curiosity about how games and websites work. This led me to explore coding and digital art, which quickly became my main interests outside of school.
              </p>
              <p>
                At San Beda College Alabang, I've been able to develop both my academic knowledge and technical skills. The school's emphasis on holistic education has helped me grow not just intellectually, but also personally.
              </p>
              <p>
                As I continue my education, I'm focused on gaining more experience in programming languages and design tools. I believe that combining technical skills with creativity will open up exciting opportunities in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
