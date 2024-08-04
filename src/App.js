import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './App.css';
import logo from './logo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-text">Madison Extravaganza</h1>
        <p className="subtext">Just in case Instagram somehow disappears</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
