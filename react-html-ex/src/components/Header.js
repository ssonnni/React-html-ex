import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <Link to="/">
        <h1>
          <img src="/img/logo.png" alt="한강빌리지" />
        </h1>
      </Link>
      <span>
        <a href="index.html">
          <img src="/img/home.jpg" alt="home" />
        </a>
      </span>
    </div>
  );
};

export default Header;
