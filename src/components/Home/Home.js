import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css"


const Home = () => {
  const list1 = {A: 'C',B: 'B',C: 'C',D: 'D'}
  const num = {...list1, A:'A'}
  const [getresponse, setGetResponse] = useState("Get")
  const [fileName, setFileName] = useState("")

  const updateGetQueryFileName = (e)=>{
    setFileName(e.target.value)
    console.log(e.target.value);
  }
  
  const GetAPI = () =>{
    console.log("Get API called");
    axios.get(`http://localhost:5000/read?fileName=${fileName}`).then(res=>{
      console.log(res.data);
      setGetResponse(res.data)
      setGetResponse(res.data)
    }).catch(err=>{
      setGetResponse("There was an error")
    })
  }
  const PostAPI = ()=>{
    console.log("Set API called");
  
  }
  return (
    <div>
      <SearchBar />
       <p>Home{num.A}</p>
      <button>Login</button>
      <button>Sign Up</button>
      <div className="hero">
        <div>
          <p>left</p>
          <input onChange={updateGetQueryFileName} value={fileName} placeholder="Enter file name"/>
          <button onClick={GetAPI}>Get Request</button>
          <p>{getresponse}</p>
        </div>
        <div>
          <p>right</p>
          <input placeholder="Enter file name"/>
          <input placeholder="Enter file value"/>
          <button onClick={PostAPI}>Set Value</button> <br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
