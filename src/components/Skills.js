import { FaReact } from "react-icons/fa";
import { SiRedux, SiJavascript, SiRubyonrails, SiHtml5, SiCss3, SiPostgresql, SiHeroku, SiSqlite, SiWebpack, SiJquery, SiGit, SiAmazonaws } from "react-icons/si";
import { DiRuby, DiMongodb } from "react-icons/di";
import SCSS from '../assets/images/scss.png';
import Mongoose from '../assets/images/mongoose.png';
import Express from '../assets/images/express.png';
import SQL from '../assets/images/sql.jpeg';
import Python from '../assets/images/python.png';
import Fireworks from '../assets/images/fireworks.gif';
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
          <img className="fireworks" src={Fireworks} alt="fireworks" />
        </div>
      }
      </TrackVisibility>
      <div className="container">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="skill-box">
                <h2>Skills</h2>
                <p>These are the skills I've learned along the way!</p>
                <div className="tech-container">
                  <div className="tech">
                    <div className="React">
                      <div className="React-icon"><FaReact size={50}/></div>
                      <span>React</span>
                    </div>
                    <div className="Redux">
                      <div className="Redux-icon"><SiRedux size={50}/></div>
                      <span>Redux</span>
                    </div>
                    <div className="Javascript">
                      <div className="Javascript-icon"><SiJavascript size={50}/></div>
                      <div className="white-div"></div>
                      <span>Javascript</span>
                    </div>  
                    <div className="Rails">
                      <div className="Rails-icon"><SiRubyonrails size={80}/></div>
                      <span>Rails</span>
                    </div>
                  </div>
                  <div className="tech">
                    <div className="HTML5">
                      <div className="HTML5-icon"><SiHtml5 size={40}/></div>
                      <span>HTML5</span>
                    </div>
                    <div className="CSS3">
                      <div className="CSS3-icon"><SiCss3 size={40}/></div>
                      <span>CSS3</span>
                    </div>
                    <div className="Ruby">
                      <div className="Ruby-icon"><DiRuby size={40}/></div>
                      <span>Ruby</span>
                    </div>  
                    <div className="SCSS">
                      <img className="SCSS-icon" src={SCSS} alt="scss icon"/>
                      <span>SCSS</span>
                    </div>
                  </div>
                  <div className="tech">
                    <div className="MongoDB">
                      <div className="MongoDB-icon"><DiMongodb size={50}/></div>
                      <span>MongoDB</span>
                    </div>
                    <div className="Mongoose">
                      <img className="Mongoose-icon" src={Mongoose} alt="mongoose icon"/>
                      <span>Mongoose</span>
                    </div>
                    <div className="ExpressJS">
                      <img className="Express-icon" src={Express} alt="express icon"/>
                      <span>ExpressJS</span>
                    </div>  
                    <div className="PostgreSQL">
                      <div className="PostgreSQL-icon"><SiPostgresql size={50}/></div>
                      <span>PostgreSQL</span>
                    </div>
                  </div>
                  <div className="tech">
                    <div className="Heroku">
                      <div className="Heroku-icon"><SiHeroku size={50}/></div>
                      <span>Heroku</span>
                    </div>
                    <div className="SQL">
                      <img className="SQL-icon" src={SQL} alt="sql icon"/>
                      <span>SQL</span>
                    </div>
                    <div className="SQLite3">
                      <div className="SQLite3-icon"><SiSqlite size={50}/></div>
                      <span>SQLite3</span>
                    </div>  
                    <div className="Webpack">
                      <div className="Webpack-icon"><SiWebpack size={50}/></div>
                      <span>Webpack</span>
                    </div>
                  </div>
                  <div className="tech">
                    <div className="jQuery">
                      <div className="jQuery-icon"><SiJquery size={50}/></div>
                      <span>jQuery</span>
                    </div>
                    <div className="Git">
                      <div className="Git-icon"><SiGit size={50}/></div>
                      <span>Git</span>
                    </div>
                    <div className="AWS">
                      <div className="AWS-icon"><SiAmazonaws size={50}/></div>
                      <div className="white-div"></div>
                      <span>AWS</span>      
                    </div>  
                    <div className="Python">
                      <img className="Python-icon" src={Python} alt="python icon"/>
                      <span>Python</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </TrackVisibility>
      </div>
    </section>
  )
};

export default Skills;