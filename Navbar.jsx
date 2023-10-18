import React from 'react';
import "./Navbar.css";
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <ul>    
          <li><a href="#">Dev@Deakin</a></li>
        </ul>
      <div className="search-box">
          <input type="text" name="search" id="Search" placeholder="Search" />
        </div>
        <ul>
          <div className="Button">
          <li><a >Post</a></li>
          <li><a ><Link to="/login">Login</Link></a></li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
