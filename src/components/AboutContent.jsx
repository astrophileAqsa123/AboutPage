import React from 'react';
import AboutText from './AboutText';
import AboutVisuals from './AboutVisuals';

function AboutContent() {
  return (
    <div className="about-grid">
        
        <AboutVisuals />
      <AboutText />
      
    </div>
  );
}

export default AboutContent;