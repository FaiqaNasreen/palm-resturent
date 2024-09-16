import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

function Navebar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  // Scroll event handler
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // Toggle mobile menu
  const handleClick = () => {
    setClick(!click);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className='container'>
        <div className='nav-bar'>
          <Link to='/' onClick={closeMobileMenu}>
            <img src={logo} alt='logo' width={50} />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink exact className="nav-link" to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className='nav-link' to="/menue" onClick={closeMobileMenu}>Menu</NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className='nav-link' to="/delivery" onClick={closeMobileMenu}>Delivery</NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className='nav-link' to="/aboutus" onClick={closeMobileMenu}>About</NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className='nav-link' to="/contactUs" onClick={closeMobileMenu}>Contact</NavLink>
            </li>
            <li onClick={handleClick}>
              <Link to="/orderForm" onClick={closeMobileMenu}>
                <button>Order Now</button>
              </Link>
            </li>
          </ul>
          <div className='hamburger' onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: '#fff' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navebar;
