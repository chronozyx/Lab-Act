import React from 'react';

const About = () => {
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
    <section className="section section-about">
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
  );
};

export default About;