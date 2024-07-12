// Navbar.js
import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import './navbar.css';

const Navbar = ({ onSelect }) => {
  return (
    <nav className='nav-menu'>
      <div className='logo'>
        <h2>Cloud.Max</h2>
      </div>
      <div className='menus'>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <select onChange={(event) => onSelect(event.target.value)}>
              <option value="">Drop down</option>
              <option ><Link to="/option1">Option1</Link></option>
            </select>
          </li>
        </ul>
      </div>
      <div className='social-icon'>
        <ul>
          <li><a className='facebook' href="" target='_blank'><FaFacebookSquare /></a></li>
          <li><a className='Instagram' href="" target='_blank'><FaInstagramSquare /></a></li>
          <li><a className='youtube' href="" target='_blank'><FaYoutubeSquare /></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
