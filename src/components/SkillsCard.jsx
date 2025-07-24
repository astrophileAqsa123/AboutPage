import React from 'react';
import NeonButton from './NeonButton';
function SkillsCard() {
  return (
    <div className="skills-card">
      <h2>My Skills</h2>
      <ul className="skills-list">
        <li><strong>Languages:</strong> JavaScript, HTML, CSS</li>
        <li><strong>Technologies:</strong> React, Node.js, Express, MongoDB</li>
        <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman</li>
        <li><strong>Soft Skills:</strong> Teamwork, Communication, Time Management</li>
      </ul>
         <NeonButton onClick={() => alert("Thanks for clicking!")} >
        Contact Me
      </NeonButton>
    </div>
  );
}

export default SkillsCard;