import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="headerContent">
              <div className="headerSection">
                <ul className="header-ul">
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                  <GoMarkGithub />
                  </li>
                </ul>
                <h1>Hi, I'm Paul Yi</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              
            </div>
          </div>
            <div className="col-6">

            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
