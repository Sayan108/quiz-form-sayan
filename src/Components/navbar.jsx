import React from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { routeAppPath } from "../App";
const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to={routeAppPath + "/"}> Register with us </Link>
      </h1>
      <ul>
        <li>
          <Link to={routeAppPath + "/about"}>About Us</Link>
        </li>
        <li>
          <Link to={routeAppPath + "/partners"}>Our Partners</Link>
        </li>
        <li>
          <Link to={routeAppPath + "/contacts"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
