import React, { Component } from "react";
function drawEllipse(ctx, coords, sizes, angle) {
  ctx.beginPath();
  ctx.save(); // сохраняем стейт контекста
  ctx.clip();
  ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
  ctx.rotate(angle); // поворачиваем координатную сетку на нужный угол
  ctx.scale(1, sizes[1] / sizes[0]); // сжимаем по вертикали
  ctx.arc(0, 0, sizes[0], 0, Math.PI * 2); // рисуем круг
  ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
  ctx.strokeStyle = "green";
  ctx.stroke(); // обводим
  ctx.closePath();
}

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate = () => {
    this.paint();
  };

  paint() {
    const { width, height, rotation } = this.props;
    const context = this.canvas.current.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, 200);

    context.rotate(rotation);

    context.fillStyle = "green";
    context.fillRect(-50, -50, 100, 100);
    context.restore();
    drawEllipse(context, [width / 2, 100], [25, 75], 300);
    drawEllipse(context, [width / 2, 300], [25, 75], 300);
  }

  render() {
    const { width, height } = this.props;
    return <canvas ref={this.canvas} width={width} height={height} />;
  }
}

export default Canvas;
