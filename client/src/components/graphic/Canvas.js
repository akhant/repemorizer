import React, { Component } from "react";

//const Index = React.lazy(() => import("../../assets/js/index.js"));
import("../../assets/js/index.js")


class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
 
 /*  componentDidUpdate = () => {
    this.paint();
  }; */

 
  render() {
    const { width, height } = this.props;
    return (
      <div>
        <canvas id="c" ref={this.canvas} width={width} height={height} >
      
        </canvas>
      </div>
    );
  }
}

export default Canvas;
