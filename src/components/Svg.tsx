import { useEffect } from "react";


const WIDTH = 600;
const HEIGHT = 600;
const COUNT = 10000;
const RADIUS = 100;


const randomColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

const Svg = () => {
  const initCircles = (count = COUNT) => {
    const root = document.querySelector("svg");
    if (root) {
      for (let i = 0; i < count; i++) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        root.appendChild(circle);
      }
      return [...root.querySelectorAll("circle")];
    }
    return []
  }

  function drawCircle(circle: SVGCircleElement, radius = 10) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    const fillColor = randomColor();
    circle?.setAttribute("cx", x);
    circle?.setAttribute("cy", y);
    circle?.setAttribute("r", radius);
    circle?.setAttribute("fill", fillColor);
  }

  function draw(circles: SVGCircleElement[]) {
    for (let i = 0; i < COUNT; i++) {
      drawCircle(circles[i], RADIUS);
    }
    requestAnimationFrame(() => { draw(circles) });
  }

  useEffect(() => {
    const root = document.querySelector("svg");
    console.log(root, 'root');
    if (root) {
      const circles = initCircles();
      draw(circles);
    }
  }, [])

  return <div>
    <svg xmlns="http://www.w3.org/2000/svg" width={WIDTH} height={HEIGHT}></svg>
  </div>
}

export default Svg