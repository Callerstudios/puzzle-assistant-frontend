import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("good")
  const [passwordMessage, setpasswordMessage] = useState("better")
  const navigate = useNavigate("/");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleRedirect = (redirectPath) => {
    setTimeout(()=>navigate(redirectPath), 3000)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:5000/verify?username=${username}&password=${password}`
      )
      .then((res) => {
        console.log(res.data.message);
        if (res.data.success === 'true'){
          handleRedirect("/");
        }
        else{
          setFeedback(res.data.message)
        }
      });
  };

  const updateUsernameInput = (e) => {
    // console.log(e.target.id)
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username: </label>
        <input
          id="username"
          onChange={updateUsernameInput}
          placeholder="james231"
          value={username}
        />
        <br />
        <br />
        <br />
        <label htmlFor="password">Enter password: </label>
        <input
          id="password"
          onChange={updateUsernameInput}
          placeholder="password"
          value={password}
        />
        <br />
        <br />
        <br />
        <button type="submit ">Submit</button>
      </form>
      <p className="feedback">{feedback}</p>
    </div>
  );
}

export default Login;
