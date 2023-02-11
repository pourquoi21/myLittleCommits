import React from "react";

export default function DocumentMenu() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "34px",
        left: 0,
        width: "250px",
        boxSizing: "border-box",
      }}
      className="window"
    >
      <div
        className="window-body"
        style={{
          padding: "1px 2px",
          margin: 0,
          display: "flex",
          fontFamily: "Noto Sans KR",
          fontWeight: 300,
        }}
      >
        Hello
      </div>
    </div>
  );
}
