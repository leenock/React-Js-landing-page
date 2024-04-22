import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
      setNavActive(!navActive);
    };
  
    const closeMenu = () => {
      setNavActive(false);
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 500) {
            closeMenu();
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    }, []);
  
    return (
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
          <img src="./img/logo.svg" alt="companyLogo" />
        </div>
        <a href
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Aboutus"
                className="navbar--content"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="OurServices"
                className="navbar--content"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="PracticeAreas"
                className="navbar--content"
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="CaseResults"
                className="navbar--content"
              >
                Case Results
              </Link>
            </li>
            <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
                >
                Contact Us
         </Link> 
          </ul>
        </div>
     
      </nav>
    );
}

export default Navbar