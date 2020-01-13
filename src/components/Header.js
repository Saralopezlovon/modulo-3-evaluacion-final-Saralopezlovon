import React from "react";
import "../stylesheets/header.scss";
import logo from "../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
      </header>
    );
  }
}

export default Header;
