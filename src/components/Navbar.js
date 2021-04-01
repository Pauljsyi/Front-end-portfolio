import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div classname="container"> 
        <div className="navbarContainer">
          <ul className="navLeft">
            <div className="navLogo">
             <h1>PAUL J.S. YI</h1>
            </div>
          </ul>
          <ul className="navbarRight">
            <li><a href="#aboutAnchor">About</a></li>
            <li><a href="#workAnchor">Projects</a></li>
            <li><a href="#contactAnchor">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
