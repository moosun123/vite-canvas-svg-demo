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

const WIDTH = 600;
const HEIGHT = 600;
const COUNT = 10000;
const RADIUS = 100;

const CanvasDemo = () => {

  const drawCirle = (ctx: CanvasRenderingContext2D, radius = RADIUS) => {
    const x = Math.random() * WIDTH
    const y = Math.random() * HEIGHT
    ctx.fillStyle = randomColor()
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  const draw = (ctx: CanvasRenderingContext2D, count = COUNT) => {
    for (let i = 0; i < count; i++) {
      drawCirle(ctx)
    }
  }

  const update = (ctx: CanvasRenderingContext2D,) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    draw(ctx, 20000)
    requestAnimationFrame(() => update(ctx!,))
  }

  useEffect(() => {
    const canvasDom = document.getElementById('canvas') as HTMLCanvasElement;

    if (canvasDom) {

      const ctx = canvasDom?.getContext('2d');

      requestAnimationFrame(() => update(ctx!))
    }
  }, [])


  return <canvas id='canvas' width={WIDTH} height={HEIGHT}></canvas>
}

export default CanvasDemo