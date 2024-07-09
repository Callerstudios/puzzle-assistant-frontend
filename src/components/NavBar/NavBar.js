import React, { useState } from "react";
import axios from "axios";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
