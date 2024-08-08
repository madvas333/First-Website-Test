// AboutMe.js
import React from 'react';
import Snowflakes from './Snowflakes';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>Welcome to my fabulous About Me page!</p>
      {/* Add other content here */}
      
      {/* Include the Snowflakes component */}
      <Snowflakes />
    </div>
  );
};

export default AboutMe;