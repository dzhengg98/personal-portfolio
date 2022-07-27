import ME from '../assets/images/ME.png';
import Airplane from '../assets/images/airplane.gif';
import TrackVisibility from "react-on-screen";
import 'animate.css';

const About = () => {
  return (
    <section className="about" id="about">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate_animated animate__bounceIn" : ""}>
            <img className="airplane" src={Airplane} alt="airplane" />
          </div>
        }
      </TrackVisibility>
      <h2 className="about-title">
        <span>About Me</span>
      </h2>
      <div className="about-content">
        <div className="about-image">
          <img src={ME} alt="David Zheng"/>
        </div>
        <div className="about-articles">
          <article className="about-article">
            <p>
              I am a software engineer that loves solving problems my own way. 
              I have a creative mindset and programming provides me the path to exercise my imaginative and clever ideas. 
              The idea that we can start from nothing and build a beautiful application from scratch is one of my favorite things about programming.
            </p>
          </article>
          <article className="about-article">
            <p>
              I am experienced in a wide range of technologies across the full stack including <span>React</span>, <span>Javascript</span>, <span>Rails</span>, <span>Ruby on Rails</span>, <span>Express</span>, <span>Node</span>, <span>MongoDB</span> and <span>PostgreSQL</span>. 
              I love learning new technologies and diving into unique challenges and projects. I am constantly looking to expand my skills and always eager to pick up new technologies quickly.
            </p>
          </article>
          <article className="about-article">
            <p>
              Discovering new food is one of my passions. 
              When I have some free time, I like to travel around New York City and experience and discover new food I have never tried before. 
              One of the greatest things about New York is there is always new places with amazing food ready to be discovered.  
              Additionally, I also love to travel around the world and play/watch basketball.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
};

export default About;