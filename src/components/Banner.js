import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Astronaut from "../assets/images/astronaut.webp";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import Resume from "../assets/docs/Resume.pdf";
import { FaPhoneSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

const Banner = () => {

  const [ loopNum, setLoopNum ] = useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);
  const [ text, setText ] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full-Stack Developer", "Software Engineer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div id="main-banner" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm David Zheng`} 
                  <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Full-Stack Developer", "Software Engineer", "UI/UX Designer" ]'>
                    <span className="wrap"> {text}</span>
                  </span>
                </h1>
                <p className="banner-social-links">
                  <span className="social-link"><BiCurrentLocation/> NEW YORK CITY, NEW YORK | </span>
                  <span className="social-link">
                    <a href="sms:+1917-517-0812" id="phone-link"><FaPhoneSquare/> (917) 517-0812</a> |
                  </span>
                  <span className="banner-social-link">
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
                  <img src={Astronaut} alt="Astronaut"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;