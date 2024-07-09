import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  const styling = {
    backgroundColor: "red",
  };
  const spanElements = []
  for(let i = 1; i < 21; i++){
    spanElements.push(<span key={i} className="spinner" style={{'--i': i}}></span>)
  }
  return (
    <div className="spinnerParent">
        {spanElements}
    </div>
  );
};

export default LoadingSpinner;
