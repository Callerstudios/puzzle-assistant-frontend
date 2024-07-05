import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css"

const Home = () => {
    const list1 = {A: 'C',B: 'B',C: 'C',D: 'D'}
    const num = {...list1, A:'A'}
  return (
    <div>
      <SearchBar />
       <p>Home{num.A}</p>
      <button>Login</button>
      <button>Sign Up</button>
      <div className="hero">
        <div>left</div>
        <div>Right</div>
      </div>
    </div>
  );
};

export default Home;
