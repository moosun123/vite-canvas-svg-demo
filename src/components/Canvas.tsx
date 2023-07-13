import { useEffect } from "react";

function randomColor() {
  return (
    'rgb( ' +
    ((Math.random() * 255) >> 0) +
    ',' +
    ((Math.random() * 255) >> 0) +
    ',' +
    ((Math.random() * 255) >> 0) +
    ' )'
  )
}


const CanvasDemo = () => {
  const canvasDom = document.getElementById('canvas') as HTMLCanvasElement;

  const drawCirle = (ctx: CanvasRenderingContext2D, WIDTH: number, HEIGHT: number, radius = 100) => {
    const x = Math.random() * WIDTH
    const y = Math.random() * HEIGHT
    ctx.fillStyle = randomColor()
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  const draw = (ctx: CanvasRenderingContext2D, WIDTH: number, HEIGHT: number, count = 1) => {
    for (let i = 0; i < count; i++) {
      drawCirle(ctx, WIDTH, HEIGHT)
    }
  }

  const update = (ctx: CanvasRenderingContext2D, WIDTH: number, HEIGHT: number) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    draw(ctx, WIDTH, HEIGHT, 20000)
    requestAnimationFrame(() => update(ctx!, WIDTH, HEIGHT))
  }

  useEffect(() => {
    if (canvasDom) {
      const WIDTH = canvasDom?.width
      const HEIGHT = canvasDom?.height
      const ctx = canvasDom?.getContext('2d');

      requestAnimationFrame(() => update(ctx!, WIDTH, HEIGHT))
    }
  }, [canvasDom])


  return <canvas id='canvas' width={600} height={600}></canvas>
}

export default CanvasDemo