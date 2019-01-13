import React, { Component } from "react";
import { Spring } from "react-spring";

class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nisi, quaerat nemo perferendis voluptatum, quisquam minima
                voluptatibus, iste dolorem magnam ex eius dolor corrupti.
                Voluptatibus aliquam ad dolores enim quam.
              </p>
              <button onClick={this.props.toggle} style={btn}>
                Bring Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "#fff",
  padding: "1.5em"
};

const btn = {
  background: "#333",
  color: "#fff",
  margin: "15px 0",
  textTransform: "uppercase",
  border: "none",
  padding: "1em 2em"
};

export default Component2;
