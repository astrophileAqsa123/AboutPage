import React from 'react';
import AboutIntro from '../components/AboutIntro';
import AboutContent from '../components/AboutContent';
import ProfileImage from '../components/ProfileImage';

function AboutPage() {
  return (
    <> 
    <section id="about">
     <ProfileImage />
     <div id='img'>
      <AboutIntro />
      <AboutContent />
      </div>
    </section></>
      
    
  );
}

export default AboutPage;