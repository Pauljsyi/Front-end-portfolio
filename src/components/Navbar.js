import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="nav">
      <div classname="container"> 
        <div className="navbarContainer">
          <ul className="navLeft">
            <div className="navLogo">
             <h1 className="navName">Paul Yi</h1>
            </div>
          </ul>
          <ul className="navbarRight">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
