import { Navbar, Container, Row, Col } from "react-bootstrap";
import Peaceout from "../assets/images/peace.gif";
import LinkedinIcon from "../assets/images/linkedin.gif";
import GithubIcon from "../assets/images/github(transparent).gif";
import AngellistIcon from "../assets/images/angellist.png";
import TwitterIcon from "../assets/images/twitter.gif";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <Navbar.Brand href="/">
              <div id="peace-img-container">
                <img className="peaceout-animation" src={Peaceout} alt="Peace" />
              </div>
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/david-zheng-87671b237/" target='_blank' rel="noopener noreferrer"><img src={LinkedinIcon} alt="Linkedin" /></a>
              <a href="https://github.com/dzhengg98" target='_blank' rel="noopener noreferrer"><img src={GithubIcon} alt="Github" /></a>
              <a href="https://angel.co/u/david-zheng-27" target='_blank' rel="noopener noreferrer"><img id="footer-angellist-icon" src={AngellistIcon} alt="Angellist" /></a>
              <a href="https://twitter.com/dzhengg1" target='_blank' rel="noopener noreferrer"><img src={TwitterIcon} alt="twitter" /></a>
            </div>
            <p className="footer-description"><a href="https://github.com/dzhengg98">@dzhengg98</a> | David Zheng</p>
            <p className="footer-description">Copyright 2022 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;