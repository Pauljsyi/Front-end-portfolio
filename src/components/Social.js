import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const Social = () => {
  return (
    <div className="social-container">
      <div className="social-items">
        <a href="https://www.linkedin.com/in/pauljsyi" className="linkedin-social">
          <FaLinkedin size={70}/>
        </a>
        <a href="https://github.com/pauljsyi" className="github-social">
          <GoMarkGithub size={70}/>
        </a> 
      </div>
      

       
    </div>
  )
}

export default Social
