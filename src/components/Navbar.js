import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Movie Review Club</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addreview">Add Review</Link>
      </div>
    </nav>
  );
}

export default Navbar;