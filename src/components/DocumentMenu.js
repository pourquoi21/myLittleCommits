import React from "react";

export default function DocumentMenu() {
  return (
    <div
      className="window"
      style={{
        position: "absolute",
        margin: "0 auto",
        width: "800px",
        height: "650px",
      }}
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
