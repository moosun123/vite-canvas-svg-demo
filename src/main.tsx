import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import CanvasDemo from './components/Canvas.tsx'
import SvgDemo from './components/Svg.tsx'
import './index.css'
import Root from './Root.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/canvas_problem",
    element: <CanvasDemo />,
  },
  {
    path: "/svg_problem",
    element: <SvgDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


