import React, { useState } from "react";
import axios from "axios";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const ShowActive = () => {
  const [active, setActive] = useState(false);
  getReq();
  // axios.get('http://localhost:5000/').
  // then(res => console.log(res))
  // console.log(response)
  return active;
};
const getReq = () => {
  fetch("http://localhost:5000/read?fileName=testfile.txt")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not OK");
      }
      // console.log("Sent");
      return res.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err);
    });
};
const postReq = () => {
  const data = "Hello there"
  axios.post("http://localhost:5000", data, 
    {
      headers: {
        'Content-Type': 'text/plain'
      },
    }
  ).then(res=>console.log(res.data)).catch(err=>console.log(err))
};
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
        <li>{Boolean(!ShowActive()) && <Link to="/login">Login</Link>}</li>
        <li>{Boolean(!ShowActive()) && <Link to="/signup">Sign Up</Link>}</li>
      </ul>
    </div>
  );
};

export default NavBar;
