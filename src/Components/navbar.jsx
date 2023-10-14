import React from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/"> Register with us </Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/partners">Our Partners</Link>
        </li>
        <li>
          <Link to="/contacts">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
