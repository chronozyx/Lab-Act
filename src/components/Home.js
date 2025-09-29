import React from 'react';

const Home = () => {
  return (
    <section className="section section-home">
      <div className="hero">
        <h1>Group 1 Members:</h1>
        <p>
            -Calugas, Gio<br />
            -De Guzman, Rozz Hill<br />
            -Malabana, Denisse Kaith<br />
            -Placido, Cristian<br />
            -Quiro, Joshua Cedric<br /> 
            -Suario, John
            <br />
        </p>
        <button className="cta-button">Start Your Project</button>
      </div>
      
      {/* Floating elements for visual interest */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        animation: 'float 12s ease-in-out infinite'
      }}></div>
    </section>
  );
};

export default Home;