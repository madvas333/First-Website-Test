import React from 'react';
import image1 from './images/draw1.jpeg';
import image2 from './images/draw2.jpeg';
import image3 from './images/draw3.jpeg';
import image4 from './images/draw4.jpeg';
import image5 from './images/draw5.jpeg';
import image6 from './images/draw6.jpeg';
import './App.css';

function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="header-text">My Art</h1>
          <div/>

      <main>
      <h2 className="subtext">Drawn with 14k gold #3776 Century Fountain Pen</h2>
        <div className="image-gallery">
        <img src={image6} alt="Draw 2" className="gallery-image" />
          <img src={image1} alt="Draw 1" className="gallery-image" />
          <img src={image5} alt="Draw 5" className="gallery-image" />
          <img src={image3} alt="Draw 3" className="gallery-image" />
          <img src={image4} alt="Draw 4" className="gallery-image" />
          <img src={image2} alt="Draw 2" className="gallery-image" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
