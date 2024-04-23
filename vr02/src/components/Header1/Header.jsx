import React, { useState } from 'react';
import './header.css';

const Header1 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="/#">
              <img src="./images/logo-dark.png" alt="logo" className="nav__logo-dark" />
              <img src="./images/logo-white.png" alt="logo" className="nav__logo-white" />
            </a>
          </div>
          <div className="nav__menu__btn" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul className={isMenuOpen ? "nav__links open" : "nav__links"} onClick={closeMenu}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#special">SPECIAL</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#event">EVENTS</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="section__container header__container" id="home">
        <div className="header__image">
          <img src="./images/header.png" alt="header" />
        </div>
        <div className="header__content">
          <h2>HIRE YOUR OWN CHEF FOR CONVENIENT CULINARY DELIGHTS</h2>
          <h1>CHEF<br /><span>WANGU</span></h1>
        </div>
      </div>
    </header>
  );
};

export default Header1;
