import { useEffect } from "react";

const ReduceOrder = () => {

  function generatePolygon(x, y, r, edges = 10) {
    const points = []
    const detla = 2 * Math.PI / edges;
    for (let i = 0; i < edges; i++) {
      const theta = i * detla;
      points.push([x + r * Math.sin(theta), y + r * Math.cos(theta)])
    }
    return points
  }

  function drawAnyShape(points, ctx) {
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i]
      const p2 = i === points.length - 1 ? points[0] : points[i + 1]
      ctx.fillStyle = 'black'
      ctx.beginPath();
      ctx.moveTo(...p1)
      ctx.lineTo(...p2)
      ctx.closePath();
      ctx.stroke()
    }
    requestAnimationFrame(() => drawAnyShape(points, ctx))
  }

  function drawAnyShape2(points, ctx) {
    ctx.beginPath();
    ctx.moveTo(...points[0]);
    ctx.fillStyle = 'black'
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(...points[i])
    }
    ctx.closePath();
    ctx.stroke()
    requestAnimationFrame(() => drawAnyShape2(points, ctx))

  }


  useEffect(() => {
    const canvasDom = document.getElementById('charts')

    if (canvasDom) {
      const ctx = canvasDom?.getContext('2d');
      for (let i = 0; i < 3000; i++) {
        const points = generatePolygon(300, 300, 100 * i * 0.05 % 300);
        // drawAnyShape(points, ctx)
        drawAnyShape2(points, ctx)
      }
    }
  }, [])


  return <canvas width={600} height={600} id='charts'></canvas>

}

export default ReduceOrder