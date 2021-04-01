import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const About = () => {
  return (
    <Router>
    <header className="header" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="headerContent">
              <div className="headerSection">
                <ul className="header-ul">
                  <Link to="www.linkedin.com/in/pauljsyi">
                    <FaLinkedin href="#contactAnchor"/>
                  </Link>
                  <Link>
                    <GoMarkGithub href="https://github.com/Pauljsyi"/>
                  </Link>
                </ul>
                <h1>Hi, I'm Paul</h1>
                <p>Aspiring, self-taught Software Engineer</p>
              </div>
              
            </div>
          </div>
            <div className="profilePicture">

            </div>
        </div>
      </div>
    </header>
    </Router>
  )
}

export default About;
