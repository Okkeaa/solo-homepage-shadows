
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patrick Josh Musni - Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="navbar">
    <div class="container">
      <div class="logo">PJM</div>
      <nav>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-item active">Home</a></li>
          <li><a href="#profile" class="nav-item">Profile</a></li>
          <li><a href="#hobbies" class="nav-item">Hobbies</a></li>
          <li><a href="#skills" class="nav-item">Skills</a></li>
          <li><a href="#about" class="nav-item">About</a></li>
          <li><a href="#contact" class="nav-item">Contact</a></li>
        </ul>
      </nav>
      <div class="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h4 class="subtitle animate-fadeIn">Welcome to my profile</h4>
          <h1 class="title animate-fadeIn">I'm <span class="gradient-text">Patrick Josh</span> Musni</h1>
          <p class="description animate-fadeIn">Student at San Beda College Alabang, aspiring developer, and digital artist.</p>
          <div class="cta-wrapper animate-fadeIn">
            <a href="#contact" class="btn-contact">Contact Me</a>
          </div>
        </div>
        
        <div class="hero-image animate-fadeIn">
          <div class="profile-circle-outer">
            <div class="profile-circle-glow"></div>
            <div class="profile-circle-inner">
              <img src="public/lovable-uploads/c319cc06-4391-465d-97a0-b15d7e67bfc0.png" alt="Patrick Josh Musni" class="profile-image">
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>
  </section>

  <section id="profile" class="section">
    <div class="container">
      <h2 class="section-title">Profile</h2>
      <div class="profile-content">
        <div class="profile-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"></rect>
                <path d="M16 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M8 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M3 10H21" stroke="currentColor" stroke-width="2"></path>
                <path d="M8 14H8.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M12 14H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M16 14H16.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M8 18H8.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M16 18H16.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="stat-content">
              <h3>Birthdate</h3>
              <p>June 14, 2009</p>
              <div class="stat-additional">14 years old</div>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 20V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M18 20V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M6 16H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M6 8H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M9 20L9 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M15 12L15 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="stat-content">
              <h3>Height</h3>
              <p>170 cm</p>
              <div class="stat-additional">5'7"</div>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6 12V18C6 19.0609 6.42143 20.0783 7.17157 20.8284C7.92172 21.5786 8.93913 22 10 22H14C15.0609 22 16.0783 21.5786 16.8284 20.8284C17.5786 20.0783 18 19.0609 18 18V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20C16.4696 20 15.9609 19.7893 15.5858 19.4142C15.2107 19.0391 15 18.5304 15 18V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div class="stat-content">
              <h3>Education</h3>
              <p>Grade 10</p>
              <div class="stat-additional">San Beda College Alabang</div>
            </div>
          </div>
        </div>
        
        <div class="profile-bio">
          <h3>About Me</h3>
          <p>I'm a Grade 10 student at San Beda College Alabang with a passion for coding and digital art. When I'm not studying, you can find me gaming, drawing, or catching up on sleep. I'm constantly developing my skills and looking forward to growing in the tech and creative fields.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="hobbies" class="section">
    <div class="container">
      <h2 class="section-title">My Hobbies</h2>
      <div class="hobbies-grid">
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg class="hobby-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.5C5 11.1193 6.11929 10 7.5 10C8.88071 10 10 11.1193 10 12.5V17.5C10 18.8807 8.88071 20 7.5 20C6.11929 20 5 18.8807 5 17.5V12.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14 12.5C14 11.1193 15.1193 10 16.5 10C17.8807 10 19 11.1193 19 12.5V17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5V12.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10 15H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10 12H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3 9V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="hobby-title">Playing Video Games</h3>
          <p class="hobby-description">I enjoy immersing myself in different game worlds, especially RPGs and strategy games that challenge my mind.</p>
        </div>
        
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg class="hobby-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L20 8L16 4L4 16L4.93847 19.0615L8 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13.5 6.5L17.5 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="hobby-title">Drawing</h3>
          <p class="hobby-description">Digital art allows me to express my creativity and bring my imagination to life through illustrations and character designs.</p>
        </div>
        
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg class="hobby-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.094 21.8795 10.2166 21.6537 9.38597C21.5674 9.00691 21.4621 8.63553 21.3354 8.27789C21.149 7.73444 20.5111 7.45787 19.9718 7.66831C19.4325 7.87875 19.175 8.53226 19.3807 9.07198C19.4798 9.33188 19.5636 9.59794 19.6309 9.86859C19.8716 10.8428 20 11.908 20 13C20 16.866 16.866 20 13 20C9.13401 20 6 16.866 6 13C6 9.13401 9.13401 6 13 6H15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M21 3L17 7M17 3L21 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="hobby-title">Sleeping</h3>
          <p class="hobby-description">A good rest recharges my creativity and helps me stay focused on my studies and projects.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-content">
        <div class="skills-grid">
          <div class="skills-column">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Coding</span>
                <span class="skill-percent">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-width="85%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Drawing</span>
                <span class="skill-percent">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-width="75%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Playing Games</span>
                <span class="skill-percent">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-width="90%"></div>
              </div>
            </div>
          </div>
          
          <div class="skills-column">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Adaptability</span>
                <span class="skill-percent">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-width="80%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Fast Learner</span>
                <span class="skill-percent">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-width="85%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Creativity</span>
                <span class="skill-percent">78%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-width="78%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-description">
          <h3>Development Journey</h3>
          <p>I've been developing my skills through both formal education and self-learning. I'm constantly exploring new technologies and techniques to improve my abilities in coding and design. My goal is to continue growing these skills and eventually specialize in web and game development.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-cards">
          <div class="about-card">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <h3>Who I Am</h3>
            <p>A Grade 10 student at San Beda College Alabang with a passion for technology and art. I balance academics with creative pursuits and gaming.</p>
          </div>
          
          <div class="about-card">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <h3>My Goals</h3>
            <p>I aim to become proficient in software development and digital art, with aspirations to combine these skills in a future career in tech or game development.</p>
          </div>
          
          <div class="about-card">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <h3>My Passion</h3>
            <p>I'm driven by creating digital experiences that bring joy and solve problems. I love the process of turning ideas into reality through code and design.</p>
          </div>
        </div>
        
        <div class="about-journey">
          <h3>My Journey</h3>
          <p>My journey began with a curiosity about how games and websites work. This led me to explore coding and digital art, which quickly became my main interests outside of school.</p>
          <p>At San Beda College Alabang, I've been able to develop both my academic knowledge and technical skills. The school's emphasis on holistic education has helped me grow not just intellectually, but also personally.</p>
          <p>As I continue my education, I'm focused on gaining more experience in programming languages and design tools. I believe that combining technical skills with creativity will open up exciting opportunities in the future.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Get In Touch</h3>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div class="contact-detail">
              <h4>Phone</h4>
              <p>0976 085 9720</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
              </svg>
            </div>
            <div class="contact-detail">
              <h4>Email</h4>
              <p>patrick.musni@example.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            <div class="contact-detail">
              <h4>School</h4>
              <p>San Beda College Alabang</p>
              <p class="location-detail">Alabang, Muntinlupa City</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>Send Message</h3>
          
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Your Name">
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Your Email">
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            
            <button type="submit" class="btn-contact">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>© 2024 Patrick Josh Musni. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script>
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const headerOffset = 64; // Height of your fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
      });
    }

    // Add animation delay to fade-in elements
    document.addEventListener('DOMContentLoaded', function() {
      const fadeInElements = document.querySelectorAll('.animate-fadeIn');
      fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
      });
    });
  </script>
</body>
</html>
