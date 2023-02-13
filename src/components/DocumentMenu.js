import React from "react";

export default function DocumentMenu(props) {
  return (
    <div
      className="window"
      style={{
        position: "absolute",
        margin: "0 auto",
        width: "900px",
        height: "750px",
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">About Jay...</div>
        <div className="title-bar-controls">
          <button aria-label="Help" />
          <button
            aria-label="Close"
            onClick={() => {
              props.setOpenSubWindow((prev) => ({
                ...prev,
                document: false,
              }));
              // props.setOpenProgramsList((prev) => {
              //   let newList = [];
              //   for (let i = 0; i < prev.length; i++) {
              //     if (prev[i] === "바탕화면 설정") newList.push();
              //     else newList.push(prev[i]);
              //   }
              //   return newList;
              // });
            }}
          />
        </div>
      </div>
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
