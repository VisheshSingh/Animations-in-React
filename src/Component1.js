import React from "react";
import { Spring } from "react-spring";

const Component1 = props => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi,
              quaerat nemo perferendis voluptatum, quisquam minima voluptatibus,
              iste dolorem magnam ex eius dolor corrupti. Voluptatibus aliquam
              ad dolores enim quam.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
};

const c1Style = {
  background: "steelblue",
  color: "#fff",
  padding: "1.5em"
};

export default Component1;
