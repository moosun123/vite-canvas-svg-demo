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
              <a href={`/`}>canvas 减少指令调用</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}