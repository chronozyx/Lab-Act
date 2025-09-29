import React from 'react';

const Header = ({ activeSection, setActiveSection, scrolled }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">GROUP 1</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setActiveSection('home')}
            >
              HOME
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => setActiveSection('contact')}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;