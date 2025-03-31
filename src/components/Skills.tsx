
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach((bar) => {
              const barEl = bar as HTMLElement;
              barEl.style.width = barEl.dataset.width || '0%';
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10" ref={skillsRef}>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-rajdhani font-medium">Coding</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-rajdhani font-medium">Drawing</span>
                <span className="text-primary">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75%"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-rajdhani font-medium">Playing Games</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90%"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-rajdhani font-medium">Adaptability</span>
                <span className="text-primary">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80%"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-rajdhani font-medium">Fast Learner</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-rajdhani font-medium">Creativity</span>
                <span className="text-primary">78%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="78%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-card p-6 rounded-lg border border-border/30">
            <h3 className="text-xl font-rajdhani font-semibold mb-4">Development Journey</h3>
            <p className="text-white/70 leading-relaxed">
              I've been developing my skills through both formal education and self-learning. I'm constantly exploring new technologies and techniques to improve my abilities in coding and design. My goal is to continue growing these skills and eventually specialize in web and game development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
