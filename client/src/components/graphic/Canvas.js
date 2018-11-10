import React, { Component } from "react";
//const Index = React.lazy(() => import("../../assets/js/index.js"));
import("../../assets/js/index.js")
function drawEllipse(ctx, coords, sizes, angle, text, rotation) {
  ctx.beginPath();

  ctx.save(); // сохраняем стейт контекста
  ctx.clip();
  ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
  ctx.rotate(rotation); // поворачиваем координатную сетку на нужный угол
  ctx.scale(1, sizes[1] / sizes[0]); // сжимаем по вертикали
  ctx.arc(0, 0, sizes[0], 0, Math.PI * 2); // рисуем круг

  //ctx.translate(coords[0] - sizes[0], coords[1] - sizes[1]);
  //ctx.rotate(rotation);
  ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
  ctx.fillStyle = "green";
  ctx.fill(); // обводим
  ctx.closePath();

  ctx.save();

  ctx.translate(coords[0], coords[1]);
  ctx.rotate(rotation);

  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText(text, -45, 0);
  ctx.restore();
}
function drawStaticEllipse(ctx, coords, sizes, angle, text, rotation) {
  ctx.beginPath();

  ctx.save(); // сохраняем стейт контекста
  ctx.clip();
  ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
  ctx.rotate((angle * Math.PI) / 180); // поворачиваем координатную сетку на нужный угол
  ctx.scale(1, sizes[1] / sizes[0]); // сжимаем по вертикали
  ctx.arc(0, 0, sizes[0], 0, Math.PI * 2); // рисуем круг

  //ctx.translate(coords[0] - sizes[0], coords[1] - sizes[1]);
  //ctx.rotate(rotation);
  ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
  ctx.fillStyle = "green";
  ctx.stroke(); // обводим
  ctx.closePath();

  /* ctx.save();
   
   ctx.translate(coords[0], coords[1]);
   ctx.rotate(rotation)
   
  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText(text, -45, 0);
  ctx.restore();  */
}

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
        <canvas id="c" ref={this.canvas} width={width} height={height} />
        
      </div>
    );
  }
}

export default Canvas;
