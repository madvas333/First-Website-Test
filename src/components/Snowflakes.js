// Snowflakes.js
import React, { useEffect } from 'react';
import './Snowflakes.css';

const Snowflakes = () => {
  useEffect(() => {
    const snowflakeContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < 50; i++) { // Adjust the number of snowflakes here
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2s and 5s
      snowflake.style.animationDelay = Math.random() * 10 + 's';
      snowflakeContainer.appendChild(snowflake);
    }
  }, []);

  return (
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
    </div>
  );
};

export default Snowflakes;
