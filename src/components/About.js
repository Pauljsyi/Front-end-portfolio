import React from 'react'

import { Link, BrowserRouter as Router } from 
'react-router-dom';
import Social from './Social'

const About = () => {
  return (
    <Router>
    <header className="header" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="headerContent">
              <div className="headerSection">
                  <Social />
                <h1 className="intro">PAUL YI</h1>
                <p className="web-dev">Web Developer</p>
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
