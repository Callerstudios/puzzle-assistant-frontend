import React from "react";
import NavBar, { ShowActive } from "./NavBar/NavBar";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
