// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Section detection for active nav highlighting
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals and user needs to create a solid foundation.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Crafting beautiful, intuitive interfaces that solve real problems.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building robust, scalable solutions with cutting-edge technologies.'
    },
    {
      number: '04',
      title: 'Launch & Growth',
      description: 'Ensuring successful deployment and continuous improvement.'
    }
  ];

  return (
    <div className="App">
      {/* Header Component */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div 
          className="logo" 
          onClick={() => scrollToSection('home')}
        >
          Group 1
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => scrollToSection('home')}
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="section section-home">
        <div className="hero">
          <h1>CREATE. DESIGN. INNOVATE.</h1>
          <p>
            We craft digital experiences that transform brands and drive results. 
            From concept to launch, we're with you every step of the way.
          </p>
          <button 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
          >
            Start Your Project
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
        >
          <span>SCROLL DOWN</span>
          <div className="scroll-arrow">↓</div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="floating-element" style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
        }}></div>
        
        <div className="floating-element" style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animationDelay: '2s'
        }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-about">
        <div className="about-content">
          <div className="about-text">
            <h2>OUR PROCESS</h2>
            <p>
              We believe in creating digital experiences that matter. Our process combines 
              strategic thinking with creative execution to deliver results that exceed expectations.
            </p>
            <p>
              From your website to every detail of your digital presence, we cover each aspect 
              of your brand's online identity. We understand that the whole is only as good as 
              the sum of its parts.
            </p>
            
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card floating-element">
              CREATIVE VISUAL
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-contact">
        <div className="contact-content">
          <h2>GET IN TOUCH</h2>
          <p>Ready to start your project? Contact us and let's create something amazing together.</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Our Office</h4>
                  <p>123 Design Street<br />Creative City, CC 10101</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567<br />Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>hello@sputnik.com<br />We reply within 24 hours</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;