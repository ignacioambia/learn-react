import React, { Component } from "react";
import { ThemeContext } from "../App";

export class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("props are: ", props, this.props.defaultValue);
    this.state = {
      count: props.defaultValue,
    };
  }

  render() {
    // return 'Hola mundo';
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeValue(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeValue(1)}>
              -
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeValue(extra) {
    this.setState((prevState) => ({ count: prevState.count + extra }));
  }
}
