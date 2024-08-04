import React from 'react';
import image1 from './images/draw1.jpeg';
import image2 from './images/draw2.jpeg';
import image3 from './images/draw3.jpeg';
import image4 from './images/draw4.jpeg';
import './App.css'; // Ensure your CSS file is imported

function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="fabulous-text">Welcome to the Home Page</h1>
      {/* Shooting Stars Container */}
      <div className="shooting-stars">
        {/* Create 10 shooting star elements with random positions and delays */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <main>
        <h2>Image Gallery</h2>
        <div className="image-gallery">
          <img src={image1} alt="Draw 1" className="gallery-image" />
          <img src={image2} alt="Draw 2" className="gallery-image" />
          <img src={image3} alt="Draw 3" className="gallery-image" />
          <img src={image4} alt="Draw 4" className="gallery-image" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
