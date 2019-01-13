import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./Component1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Component1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
