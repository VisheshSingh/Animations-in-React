import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
