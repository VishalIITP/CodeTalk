import React, { useState, useEffect } from "react";
import "./css/NavBar.css";
import img from "./../Assests/Images/profile.png";
import logo from "./../Assests/Logo/whiteTextNobg.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(200); // Set your initial logo size here
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const openSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  // Use useEffect to update logo size when the window is resized
  useEffect(() => {
    const handleResize = () => {
      // Adjust the logo size based on your desired conditions
      const newLogoSize = window.innerWidth < 500 ? 180 : 230;
      setLogoSize(newLogoSize);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-header">
        <div className="left-menu">
          <a href="#" className="nav-item">
            <button>Dashboard</button>
          </a>

          <NavLink to="/Courseplan" className="nav-item">
            <button>Time table</button>
          </NavLink>

          <a href="" className="nav-item">

          <button>Leaderboard</button>
          </a>
        </div>

        <div className="navbar-brand">
          {/* Your profile icon or image */}

          <NavLink to="/" className="nav-item">
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ width: `300px` }}
            />
          </NavLink>
        </div>

        <div className="profile-icon">
          {/* Your profile icon or image */}
          <img
            className="profileImage"
            src={img}
            alt="profile"
            //opens login or Signup modal after clicking on icon
            onClick={() => openLoginModal()}
          />
        </div>

        {/* login modal content  */}
        {showLoginModal && (
          <div className="modal">
            <span className="close c1" onClick={() => setShowLoginModal(false)}>
              &times;
            </span>
            <div className="modal-content">
              <h2>Login</h2>
              <div>
                <input type="text" placeholder="Username" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <button className="btn">Login</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => openSignupModal()}>
                  Click here to sign up
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Signup modal content */}
        {showSignupModal && (
          <div className="modal">
            <span
              className="close c2"
              onClick={() => setShowSignupModal(false)}
            >
              &times;
            </span>
            <div className="modal-content">
              <h2>Sign Up</h2>

              <div>
                <input type="text" placeholder="Username" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <input type="password" placeholder="Confirm Password" />
              </div>

              <button className="btn">Sign Up</button>

              <p>
                Already have an account?{" "}
                <span onClick={() => openLoginModal()}>
                  Click here to log in
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Hamburger menu for smaller screens */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Mobile menu for smaller screens */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#" className="mbil">
              Dashboard
            </a>
            <a href="#" className="mbil">
              Time table
            </a>
            <a href="#" className="mbil">
              Leaderboard
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
