import { Container, Row, Col } from "react-bootstrap";
import Astronaut from "../assets/images/astronaut.webp";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import Resume from "../assets/docs/Resume.pdf";
import { FaPhoneSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div id="main-banner" className={isVisible ? "animate__animated animate__backInDown" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm David Zheng`} 
                  <Typewriter
                    options={{
                      strings: ["New York Based", "Full-Stack Developer", "Software Engineer", "UI/UX Designer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 70,
                      pauseFor: 1000,
                    }}
                  />
                </h1>
                <p className="banner-social-links">
                  <span className="social-link"><BiCurrentLocation/> NEW YORK CITY, NEW YORK | </span>
                  <span className="social-link">
                    <a href="sms:+1917-517-0812" id="phone-link"><FaPhoneSquare/> (917) 517-0812</a> |
                  </span>
                  <span className="social-link">
                    <a href="mailto:dzheng3456@gmail.com"id="email-link"> <MdMarkEmailUnread/> dzheng3456@gmail.com</a>
                  </span>
                </p>
                <div className="banner-link">
                  <a href='#connect' className="connect-link"><button>Let’s Connect <ArrowRightCircle size={25} className="svg-right" /></button></a>
                  <a href={Resume} className="connect-link" download><button>Resume <ArrowDownCircle size={25} className="svg-down" /></button></a>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="astronaut" src={Astronaut} alt="Astronaut" draggable="false"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;