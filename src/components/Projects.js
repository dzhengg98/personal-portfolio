import { Container } from "react-bootstrap";
import PickaPet from "../assets/images/pickapet.png";
import REM32 from "../assets/images/REM32.png";
import PM25 from "../assets/images/PM25.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Motobike from '../assets/images/moterbike.webp'

const Projects = () => {
  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="projects" id="projects">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__slideInDown" : ""}>
            {/* {console.log(isVisible)} */}
            <img className="motobike" src={Motobike} alt="motobike" />
          </div>
        }
      </TrackVisibility>
      <Container>
        <div className="projects-container">
          <h2 className="projects-container-title">Projects</h2>
          <p className="projects-container-description">Here are a list of all the projects I have currently done.</p>
          <Carousel responsive={responsive} infinite={true} className="project-carousel">
            <div className="first-project">
              <div className="project-image-container">
                <img className="project-image" src={PickaPet} alt="Picka Pet"/>
              </div>
              <div className="project-info-container">
                <h4 className="project-title">Picka Pet</h4>
                <div className="project-description-container">
                  <p className="project-description">Picka Pet is a pet interaction web application that allows users to interact with a variety of different pets and have fun while doing so! Picka Pet was built using <span>React, Redux, Javascript, NodeJS, Express,</span> and <span>MongoDB.</span> This application leverages the use of <span>RESTful routes</span> to implement <span>CRUD functionality</span> and allows the users to dynamically interact with the pets through a variety of pet actions. Try it out today! </p>
                </div>
                <div className="project-links">
                  <a href="https://github.com/madeleinepla/PickaPet" target="_blank" rel="noopener"><button className="project-button">Github</button></a>
                  <a href="https://picka-pet.herokuapp.com/" target="_blank" rel="noopener"><button className="project-button">Live</button></a>
                </div>
              </div>
            </div>
            <div className="second-project">
              <div className="project-image-container">
                <img className="project-image" src={REM32} alt="REM32"/>
              </div>
              <div className="project-info-container">
                <h4 className="project-title">REM32</h4>
                <div className="project-description">REM32 is a clone of the popular website <span>500px</span> where you can browse photos and upload your very own. The application was built using <span>React, Redux, Javascript, Ruby, Rails,</span> and <span>PostgreSQL.</span> Using REM32, users are able to upload and browse variety of photos as well as post comments, add likes and follow other users. Through the use of <span>AWS Storage,</span>to handle image hosting, the application has increase scalability and server load is reduced. Try it out today!</div>
                <div className="project-links">
                  <a href="https://github.com/dzhengg98/rem32" target="_blank" rel="noopener"><button className="project-button">Github</button></a>
                  <a href="https://rem32.herokuapp.com/#/" target="_blank" rel="noopener"><button className="project-button">Live</button></a>
                </div>
              </div>
            </div>
            <div className="third-project">
              <div className="project-image-container">
                <img className="project-image" src={PM25} alt="PM25"/>
              </div>
              <div className="project-info-container">
                <h4 className="project-title">PM25</h4>
                <div className="project-description">PM25 is a data visualization application that provides users with an interactive dashboard to view country's concentrations of Air Pollution across the Globe. This project was developed using <span>Vanilla Javascript, HTML5, CSS3,</span> and <span>Chartjs.</span> Through the use of <span>asynchronous/await functions,</span> alongside <span>data parsing</span> of csv files data from various countries was able to be fetched and displayed and presented. Try it out today!</div>
                <div className="project-links">
                  <a href="https://github.com/dzhengg98/PM25" target="_blank" rel="noopener"><button className="project-button">Github</button></a>
                  <a href="https://dzhengg98.github.io/PM25/" target="_blank" rel="noopener"><button className="project-button">Live</button></a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

export default Projects;