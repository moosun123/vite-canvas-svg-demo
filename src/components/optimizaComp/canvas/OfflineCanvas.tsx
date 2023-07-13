import { useEffect } from "react";
import worker_test from './worker.js';

const WIDTH = 600;
const HEIGHT = 600;


const useOfflineWork = () => {
  let offscreen: OffscreenCanvas;
  let ctx: OffscreenCanvasRenderingContext2D;

  function init() {
    offscreen = new OffscreenCanvas(512, 512);
    ctx = offscreen.getContext("2d")!;
  }

  // 绘制图形
  function draw() {
    if (ctx && offscreen) {
      ctx.clearRect(0, 0, offscreen.width, offscreen.height);
      for (var i = 0; i < 10000; i++) {
        for (var j = 0; j < 1000; j++) {
          ctx.fillRect(i * 3, j * 3, 2, 2);
        }
      }
      const imageBitmap: ImageBitmap = offscreen.transferToImageBitmap();
      // 传送给主线程
      postMessage({ imageBitmap: imageBitmap }, [imageBitmap]);
    }

  }

  useEffect(() => {
    // 监听主线程发的信息
    window.onmessage = function (e) {
      if (e.data.msg == 'init') {
        init();
        draw();
      }
    }
  }, [])
}

const OfflineCanvas = () => {

  // useEffect(() => {
  //   const canvas = document.getElementById('canvas_id') as HTMLCanvasElement
  //   // 离屏canvas
  //   if (canvas) {
  //     const offscreen1 = new OffscreenCanvas(200, 200);
  //     console.log(offscreen1, '创建一个离屏渲染')


  //     const htmlCanvas = document.createElement('canvas');
  //     const offscreen = htmlCanvas.transferControlToOffscreen();
  //     const gl = offscreen.getContext('webgl');
  //     console.log(gl, offscreen, '创建一个离屏渲染-2')

  //   }
  // }, [])


  /** 优化后的代码 */
  useEffect(() => {
    const worker = new Worker(worker_test)
    worker.postMessage({ msg: 'init' });
    worker.onmessage = function (e) {
      // 这里就接受到work 传来的离屏canvas位图
      console.log(e.data, '返回内容');

      // ctx.drawImage(e.data.imageBitmap, 0, 0);
    }
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.stroke()
  }, [])



  // useEffect(() => {
  //   const canvas = document.getElementById('canvas_id') as HTMLCanvasElement;
  //   if (canvas) {
  //     const ctx = canvas.getContext('2d');
  //     if (ctx) {
  //       for (let i = 0; i < 10000; i++) {
  //         for (let j = 0; j < 1000; j++) {
  //           ctx.fillRect(i * 3, j * 3, 2, 2);
  //         }
  //       }
  //       ctx.arc(300, 300, 50, 0, 2 * Math.PI);
  //       ctx.stroke()
  //     }
  //   }
  // }, [])

  return <canvas width={WIDTH} height={HEIGHT} id='canvas_id' />
}

export default OfflineCanvas;