import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo7.png';
import { Link } from 'react-scroll';  // Importing the correct Link from react-scroll
import menu_icon from '../../assets/menu-icon.png';
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      });
    };
  }, []);

  const [mobileMenu, setMobileMenu ]=useState(false) ;
  const toggleMenu =() =>{
    mobileMenu? setMobileMenu (false): setMobileMenu (true);

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu? '':'hide-mobile-menu'}>

        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="courses" smooth={true} offset={-260} duration={500}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  );
};

export default Navbar;
