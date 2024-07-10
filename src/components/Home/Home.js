import React from "react";
import { connect } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import myImage from '../../IMAGES/terminal-image.webp'
import "./Home.css";
import { setOnline } from "../../redux/online/OnlineActions";
// import mapStateToProps from "../selectors";

function Home(props) {
  return (
    <div>
      <SearchBar />
      <p>Online: {String(props.online)}</p>
      <div className="gamesGrid">
        <div className="games">
          <button>
            <img src={`${process.env.PUBLIC_URL}/IMAGES/terminal-image.webp`} />
          <p className="bold">Terminal</p>
          </button>
        </div>
        <div className="games">
        <button>
            <img src={myImage} />
          <p className="bold">Terminal</p>
          </button>
        </div>
        <div className="games"></div>
        <div className="games"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
    return{
        online: state.online
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         setOnline: ()=> dispatch(setOnline())
//     }
// }

export default connect(mapStateToProps) (Home);
