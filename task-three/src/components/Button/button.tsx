"use client";

import React, { Component } from "react";

interface ToggleButtonState {
  isShown: boolean;
}

class Button extends Component<{}, ToggleButtonState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isShown: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {this.state.isShown ? "Hide" : "Show"}
      </button>
    );
  }
}

export default Button;
