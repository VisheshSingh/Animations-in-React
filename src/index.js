import React, { Component } from "react";
import { Transition, animated } from "react-spring";
import ReactDOM from "react-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

import "./styles.css";

class App extends Component {
  state = {
    show3: false
  };
  toggle = () => {
    this.setState({
      show3: !this.state.show3
    });
  };
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.show3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
