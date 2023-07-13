import { useEffect } from "react";


const WIDTH = 500;
const HEIGHT = 500;
const COUNT = 1500;
const RADIUS = 200;


const randomColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

const Svg = () => {
  const root = document.querySelector("svg");

  function initCircles(count = COUNT) {
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
  const circles = initCircles();

  function drawCircle(circle: SVGCircleElement, radius = 10) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    const fillColor = randomColor();
    circle?.setAttribute("cx", x);
    circle?.setAttribute("cy", y);
    circle?.setAttribute("r", radius);
    circle?.setAttribute("fill", fillColor);
  }

  function draw() {
    for (let i = 0; i < COUNT; i++) {
      drawCircle(circles[i], RADIUS);
    }
    requestAnimationFrame(draw);
  }

  useEffect(() => {
    if (root) {
      draw();
    }
  }, [root])

  return <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"></svg>
}

export default Svg