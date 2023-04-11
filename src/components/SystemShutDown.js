import React from "react";
import ShutDownPage from "./ShutDownPage";

function SystemShutDown(props) {
  React.useEffect(() => {
    props.setShutDown(true);
    props.setOnAndOff((prev) => {
      return {
        ...prev,
      };
    });
    // return () => props.setShutDown(false);
  }, []);

  function closeWindow() {
    props.setShutDown(false);
  }

  function nowShutDown() {
    props.setOnAndOff((prev) => {
      return {
        ...prev,
        shutDownClicked: true,
      };
    });
  }

  return (
    <div
      className="shutdown_shadow"
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* {shutClicked && <ShutDownPage />} */}
      <div
        className="window"
        style={{ width: "450px", height: "220px", boxSizing: "border-box" }}
      >
        <div className="title-bar">
          <div className="title-bar-text">시스템 종료...</div>
          <div className="title-bar-controls">
            <button onClick={closeWindow} aria-label="Close"></button>
          </div>
        </div>
        <div
          className="window-body"
          // style={
          //   {
          //     display: "flex",
          //     flexDirection: "column",
          //     alignItems: "center",
          //     alignContent: "space-between",
          //     padding: "0 0 25px 0",
          //     boxSizing: "border-box",
          //   }
          // }
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "100px", padding: "0 0 0 10px" }}>
              <img src={require(`../../src/images/windows-shutdown.png`)} />
            </div>
            <div className="shutdown_content">
              <p>다음 중에서 선택하십시오.</p>
              <div className="field-row">
                <input
                  defaultChecked
                  id="radio1"
                  type="radio"
                  name="second-example"
                />
                <label htmlFor="radio1">시스템 종료(S)</label>
              </div>
              <div className="field-row">
                <input
                  disabled
                  id="radio2"
                  type="radio"
                  name="second-example"
                />
                <label htmlFor="radio2">시스템 대기(T)</label>
              </div>
              <div className="field-row">
                <input
                  disabled
                  id="radio3"
                  type="radio"
                  name="second-example"
                />
                <label htmlFor="radio3">시스템 다시 시작(R)</label>
              </div>
              <div className="field-row">
                <input
                  disabled
                  id="radio4"
                  type="radio"
                  name="second-example"
                />
                <label htmlFor="radio4">
                  MS-DOS모드에서 시스템 다시 시작(M)
                </label>
              </div>
            </div>
          </div>
          <div style={{ height: "25px" }}></div>
          <div
            className="shutdown_button"
            style={{
              position: "relative",
              left: "25%",
              // margin: "0 auto",
              // transform: "translateX(-50%)",
            }}
          >
            <button
              style={{
                marginRight: "20px",
                // position: "relative",
                // float: "left",
              }}
              onClick={nowShutDown}
            >
              확인
            </button>
            <button style={{ position: "absolute" }} onClick={closeWindow}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SystemShutDown);
