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
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
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

const counter = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1em auto"
};

export default Component1;
