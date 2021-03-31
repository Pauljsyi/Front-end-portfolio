import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div classname="container"> 
        <div className="navbarContainer">
          <ul className="navLeft">
            <div className="navLogo">
             <img src="**" alt="logo"/>
            </div>
          </ul>
          <ul className="navbarRight">
            <li><a href="*">Home</a></li>
            <li><a href="*">About</a></li>
            <li><a href="*">Experience</a></li>
            <li><a href="*">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
