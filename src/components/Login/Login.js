import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./Login.css";
import { connect } from "react-redux";
import { setOnline } from "../../redux/online/OnlineActions";
import GoogleSignIn from "../GooGleSignIn/GoogleSignIn";


function Login(props) {
  const [username, setUsername] = useState("james");
  const [password, setPassword] = useState("password1234");
  const [feedback, setFeedback] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState(" ");
  const [passwordMessage, setpasswordMessage] = useState(" ");
  const navigate = useNavigate("/");

  const handleRedirect = (redirectPath) => {
    navigate(redirectPath);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let canSubmit = false;
    if (username.length > 0 && password.length > 0) {
      canSubmit = true;
    }
    if (canSubmit) {
      setFeedback("");
      setShowLoading(true);
      axios
        .get(
          `http://localhost:5000/verify?username=${username}&password=${password}`
        )
        .then((res) => {
          if (res.data.success === "true") {
            props.setOnline()
            setTimeout(() => handleRedirect("/"), 1000);
          }
          setFeedback(res.data.message);
          setShowLoading(false);
        })
        .catch((err) => {
          setFeedback(err.message);
          setShowLoading(false);
        });
    }

    const usernameReply = username.length === 0 ? "Enter a username" : "";
    const passwordReply = password.length === 0 ? "Enter a password" : "";
    setUsernameMessage(usernameReply);
    setpasswordMessage(passwordReply);
  };

  const updateUsernameInput = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      {showLoading && <LoadingSpinner />}
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username: </label>
        <input
          id="username"
          onChange={updateUsernameInput}
          placeholder="james231"
          value={username}
        />
        <p className="feedback">{usernameMessage}</p>
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
        <p className="feedback">{passwordMessage}</p>
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
        <p className="feedback">{feedback}</p>
      </form>
      <GoogleSignIn/>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
      online: state.online
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setOnline: ()=> {dispatch(setOnline())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
