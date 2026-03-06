import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <h2 className="brand">📰 NewsIndia</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/form">Form</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar; 