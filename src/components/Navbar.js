import React, { useState, useEffect } from 'react';
import './css/NavBar.css';
import img from './../Assests/Images/profile.png'
import logo from './../Assests/Logo/whiteTextNobg.png'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(200); // Set your initial logo size here

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Use useEffect to update logo size when the window is resized
  useEffect(() => {
    const handleResize = () => {
      // Adjust the logo size based on your desired conditions
      const newLogoSize = window.innerWidth < 500?180:230;
      setLogoSize(newLogoSize);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='navbar-header'>
        <div className='left-menu'>
          <a href='#' className='nav-item'>
            Dashboard
          </a>
          <a href='#' className='nav-item'>
            Time table
          </a>
          <a href='#' className='nav-item'>
            Leaderboard
          </a>
        </div>

        <div className='navbar-brand'>
          {/* Your profile icon or image */}
          <img className="logo" src={logo} alt="logo" style={{ width: `${logoSize}px` }} />
        </div>

        <div className='profile-icon'>
          {/* Your profile icon or image */}
          <img className="profileImage" src={img} alt="profile" />
        </div>

        

        {/* Mobile menu for smaller screens */}
        {isMenuOpen && (
          <div className='mobile-menu'>
            <a href='#' className= "mbil">Dashboard</a>
            <a href='#' className= "mbil">Time table</a>
            <a href='#' className= "mbil">Leaderboard</a>
            
          </div>
        )}
        {/* Hamburger menu for smaller screens */}
        <div className='hamburger-menu' onClick={toggleMenu}>
          <div className='bar' ></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
