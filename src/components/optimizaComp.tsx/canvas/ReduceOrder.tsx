import { useEffect } from "react";



const ReduceOrder = () => {
  const canvasDom = document.getElementById('charts') as HTMLCanvasElement

  function generatePolygon(x, y, r, edges = 3) {
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
  }


  useEffect(() => {
    if (canvasDom) {
      const points = generatePolygon(0, 0, 10);
      const ctx = canvasDom?.getContext('2d');
      drawAnyShape(points, ctx)
    }
  }, [canvasDom])



  return <canvas width={800} height={800} id='charts'></canvas>

}

export default ReduceOrder