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

export default Component2;
