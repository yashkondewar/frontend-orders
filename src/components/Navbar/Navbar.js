import React from 'react';
import './Navbar.css';
import circle from "../img/circle.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="navbar__button">New order </button>
      <button className="navbar__button">Awaiting&nbsp;Customer <img src={circle} alt="Logo"/></button>
      <button className="navbar__button">In progress <img src={circle} alt="Logo"/></button>
      <button className="navbar__button">Completed <img src={circle} alt="Logo"/></button>
      <button className="navbar__button">Cancelled <img src={circle} alt="Logo"/></button>
      <button className="navbar__button">All orders <img src={circle} alt="Logo"/></button>
      <button className="navbar__button">Disputed orders </button>
    </nav>
  );
}

export default Navbar;
