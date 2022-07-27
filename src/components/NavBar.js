import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Wave from "../assets/images/wave.gif";
import LinkedinIcon from "../assets/images/linkedin.gif";
import GithubIcon from "../assets/images/github(transparent).gif";
import AngellistIcon from "../assets/images/angellist.png";
import TwitterIcon from "../assets/images/twitter.gif";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {

  const [ activeLink, setActiveLink ] = useState('home');
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : "scrolled"}>
        <Container>
          <Navbar.Brand href="/">
            <div id="waving-img-container">
              <img className="waving-img" src={Wave} alt="waving gif" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="active-links-container">
              <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/david-zheng-87671b237/" target='_blank' rel="noopener noreferrer"><img src={LinkedinIcon} alt="linkedin icon" /></a>
                <a href="https://github.com/dzhengg98" target='_blank' rel="noopener noreferrer"><img src={GithubIcon} alt="github icon" /></a>
                <a href="https://angel.co/u/david-zheng-27" target='_blank' rel="noopener noreferrer" id="angellist-icon"><img src={AngellistIcon} alt="angellist icon" /></a>
                <a href="https://twitter.com/dzhengg1" target='_blank' rel="noopener noreferrer"><img src={TwitterIcon} alt="twitter icon" /></a>
              </div>
              <HashLink to="#connect">
                <button className="btn connect-btn"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
};

export default NavBar;