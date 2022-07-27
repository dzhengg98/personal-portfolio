import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImage from "../assets/images/programmer.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import Happy from "../assets/images/happy.gif";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_m2wwhpk", "template_4uuru7e", form.current, "awJCuagL9U6wYO3--")

    e.target.reset();
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-container">
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img id="contact-image" className={isVisible ? "animate__animated animate__zoomIn" : ""} src={ContactImage} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img className="contact-happy-image" src={Happy} alt="Happy" />
                <h2 className="contact-title">Get In Touch</h2>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" placeholder="First name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" placeholder="Last name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone" required />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Provide your message" required />
                      <button type="submit"><span>send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  )
};

export default Contact;