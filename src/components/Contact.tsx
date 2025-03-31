
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-card p-8 rounded-lg border border-border/30">
            <h3 className="text-2xl font-rajdhani font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-medium mb-1">Phone</h4>
                  <p className="text-white/70">0976 085 9720</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-medium mb-1">Email</h4>
                  <p className="text-white/70">patrick.musni@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-medium mb-1">School</h4>
                  <p className="text-white/70">San Beda College Alabang</p>
                  <p className="text-white/50 text-sm">Alabang, Muntinlupa City</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border/30">
            <h3 className="text-2xl font-rajdhani font-semibold mb-6">Send Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-white/80">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-contact w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
