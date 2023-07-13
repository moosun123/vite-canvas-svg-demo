import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import CanvasDemo from './components/Canvas.tsx'
import OfflineCanvas from './components/optimizaComp/canvas/OfflineCanvas.tsx'
import ReduceOrder from './components/optimizaComp/canvas/ReduceOrder.tsx'
import RenderPart from './components/optimizaComp/canvas/RenderPart.tsx'
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
  {
    path: '/reduceOrder',
    element: <ReduceOrder />
  },
  {
    path: '/renderPart',
    element: <RenderPart />
  },
  {
    path: '/offlineCanvas',
    element: <OfflineCanvas />

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


