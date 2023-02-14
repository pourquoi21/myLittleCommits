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
        className="window-body documentMenu"
        style={{
          padding: "1px 2px",
          margin: 0,
          display: "flex",
          fontFamily: "Noto Sans KR",
          fontWeight: 300,
        }}
      >
        <ul className="document_menu" style={{ display: "flex" }}>
          <li>파일(F)</li>
          <li>보기(V)</li>
          <li>도움말(H)</li>
        </ul>
        <hr />
        <span
          className="document_select"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>주소(D)</p>
          <select>
            <option>https://github.com/pourquoi21</option>
          </select>
        </span>
        <div
          className="document_content"
          style={{
            height: "100%",
            background: "#fff",
            borderTop: "2px solid gray",
            borderLeft: "2px solid gray",
            borderBottom: "1px solid #fff",
            borderRight: "1px solid #fff",
            boxShadow: "-1px -1px inset lightgray",
          }}
        >
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
}
