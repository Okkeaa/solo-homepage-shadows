
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
        <!-- Profile content from Profile.tsx -->
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
        <!-- Skills content from Skills.tsx -->
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <!-- About content from About.tsx -->
      </div>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <div class="contact-content">
        <!-- Contact content from Contact.tsx -->
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
