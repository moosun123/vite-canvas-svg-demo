import { useEffect } from "react";



const WIDTH = 600;
const HEIGHT = 600;
const COUNT = 10000;
const RADIUS = 100;

const RenderPart = () => {

  useEffect(() => {
    const canvas = document.getElementById('canvas_id') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        console.log(ctx, 'ctx');

        ctx.fillStyle = 'red'
        ctx.arc(100, 100, 300, 0, Math.PI * 2, false);
        ctx.clip();
        ctx.fillRect(100, 100, 300, 300);
      }
    }
  }, [])

  return <canvas width={WIDTH} height={HEIGHT} id='canvas_id'></canvas>
}


export default RenderPart