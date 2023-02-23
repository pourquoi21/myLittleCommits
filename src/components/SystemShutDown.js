import React from "react";

export default function SystemShutDown() {
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
      <div className="window" style={{ width: "450px" }}>
        <div className="title-bar">
          <div className="title-bar-text">시스템 종료...</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div
          className="window-body"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8px 0 25px 0",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "100px" }}>
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
          <div
            className="shutdown_button"
            style={{ margin: "25px auto 0 auto", boxSizing: "border-box" }}
          >
            <button style={{ marginRight: "20px" }}>확인</button>
            <button>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}
