import React from "react";
import NavBar, { ShowActive } from "./NavBar/NavBar";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ErrorPage from "./ErrorPage/ErrorPage";

function Container(props) {
  const isOnline = props.online;
  return (
    <div>
      <Router>
        <NavBar />
        <p>{String(isOnline)}</p>
        {isOnline ? (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/*" element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    online: state.online,
  };
};

export default connect(mapStateToProp)(Container);
