import React, { Component } from "react";
import Canvas from "./Canvas";

class ReactCanvas extends Component {
  state = { time: 0 };

  /*  componentDidMount = () => {
    requestAnimationFrame(this.tick);
  };

  tick = () => {
    const time = this.state.time + 0.1;
    this.setState({ time });
    requestAnimationFrame(this.tick);
  }; */

  render() {
    return (
      <Canvas
        time={this.state.time}
        width={window.innerWidth}
        height={window.innerHeight - 6 }
      />
    );
  }
}

export default ReactCanvas;
