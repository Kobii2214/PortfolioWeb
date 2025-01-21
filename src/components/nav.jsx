import React from 'react';

const Nav = () => {
  return (
    <div className="Nav">
      <header className="Nav-header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#aboutme" className="navbar-link">About Me</a>
            </li> 
            <li className="navbar-item">
              <a href="#projects" className="navbar-link">Projects</a>
            </li>
            <li className="navbar-item">
              <a href="#contacts" className="navbar-link">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
