import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <li>
          <ul>canvas 性能影响</ul>
          <ul>svg 性能影响</ul>
          <ul>canvas 减少指令调用</ul>
          <ul></ul>
        </li>

      </div>

    </>
  )
}

export default App
