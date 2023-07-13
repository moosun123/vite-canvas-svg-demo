const useOfflineWork = () => {
  let offscreen;
  let ctx;

  function init() {
    offscreen = new OffscreenCanvas(512, 512);
    ctx = offscreen.getContext("2d");
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
      const imageBitmap = offscreen.transferToImageBitmap();
      // 传送给主线程
      postMessage({ imageBitmap: imageBitmap }, [imageBitmap]);
    }

  }

  // 监听主线程发的信息 
  window.onmessage = function (e) {
    if (e.data.msg == 'init') {
      console.log(e, 'e--->');
      init();
      draw();
    }
  }
}

export default useOfflineWork