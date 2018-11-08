import React, { Component } from "react";
import Canvas from "./Canvas";

class ReactCanvas extends Component {
  state = { rotation: 0 };

  componentDidMount = () => {
    requestAnimationFrame(this.tick);
  };

  tick = () => {
    const rotation = this.state.rotation + 0.01;
    this.setState({ rotation });
    requestAnimationFrame(this.tick);
  };

  render() {
    return <Canvas rotation={this.state.rotation} width={window.innerWidth} height={window.innerHeight} />;
  }
}

export default ReactCanvas;
