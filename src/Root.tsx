export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <a href={`/canvas_problem`}>canvas 性能影响</a>
            </li>
            <li>
              <a href={`/svg_problem`}>svg 性能影响</a>
            </li>
            <li>
              <a href={`/reduceOrder`}>canvas 减少指令调用</a>
            </li>
            <li>
              <a href={`/renderPart`}>canvas 局部渲染</a>
            </li>
            <li>
              <a href={`/offlineCanvas`}>离屏canvas</a>
            </li>

          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}