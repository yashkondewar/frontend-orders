import React from "react";
import "./Header.css";
import cappsuleLogo from "../img/cappsuleLogo.png";
import Switch from "@mui/material/Switch";
import back from "../img/back.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={back} alt="Logo" />
        Orders
      </h1>
      <img src={cappsuleLogo} alt="Logo" className="header__image" />
      <span>
        <button className="toggle-button">
          Shop Open
          <Switch defaultChecked />
        </button>
        <button className="header__button">Go Premium</button>
      </span>
    </header>
  );
};

export default Header;
