import React from "react";

export default function StartDeepDetail3(props) {
  return (
    <div
      style={{
        position: "absolute",
        left: "140px",
        width: "160px",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
      className="window"
    >
      <div
        className="window-body"
        style={{
          padding: "1px 2px",
          margin: 0,
          display: "flex",
          alignItems: "center",
          fontFamily: "Noto Sans KR",
          fontWeight: 300,
        }}
      >
        <ul
          className="StartDeepDetail-ul"
          onClick={() => props.setStartMenuOn(false)}
        >
          <li>
            <img
              src={require(`../../src/images/windows-ie.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
            />
            <span>React portfolio</span>
          </li>
          <li>
            <img
              src={require(`../../src/images/windows-ie.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
            />
            <span>React movieapp</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
