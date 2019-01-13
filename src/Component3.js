import React from "react";
import { Spring } from "react-spring";

const Component3 = props => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <div style={c3Style}>
            <h1>Component 3</h1>
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

const c3Style = {
  background: "skyblue",
  color: "#fff",
  padding: "1.5em"
};

export default Component3;
