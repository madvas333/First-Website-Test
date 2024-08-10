import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ReviewPage from './components/ReviewPage';
import './App.css';
import logo from './logo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-text">Madison Extravaganza</h1> 
        <nav>
          <ul>
            <li>
              <Link to="/">My Art</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link> {/* Consistent path */}
            </li>
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
