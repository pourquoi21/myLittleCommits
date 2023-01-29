import React from "react";
import "98.css";

function App() {
  function MainWindow() {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ width: 300 }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">A wild alert!</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <p style={{ textAlign: "center" }}>입장하시겠습니까?</p>
          <div className="field-row" style={{ justifyContent: "center" }}>
            <button onClick={() => setCount(count + 1)}>Yes</button>
            <button onClick={() => setCount(count - 1)}>네</button>
            <button onClick={() => setCount(0)} disabled>
              아니오
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainWindow />
    </div>
  );
}

export default App;
