import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const About = () => {
  return (
    <header className="header" id="aboutAnchor">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="headerContent">
              <div className="headerSection">
                <ul className="header-ul">

                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                  <GoMarkGithub />
                  </li>
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
  )
}

export default About;
