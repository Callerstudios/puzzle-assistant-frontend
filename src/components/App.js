import React from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import Container from "./Container";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}



export default App;
