import React from "react";
import Draggable from "react-draggable";

export default function Notepad(props) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <Draggable onDrag={(e, data) => trackPos(data)} handle="strong">
      <div
        // id={
        //   props.openSubWindow.문서 === "active"
        //     ? "program_active"
        //     : "program_div"
        // }
        className="window"
        style={{
          position: "absolute",
          margin: "0 auto",
          width: "450px",
          height: "550px",
          boxSizing: "border-box",
        }}
        // onClick={() => {
        //   const keys = Object.keys(props.openSubWindow);
        //   props.setOpenSubWindow((prev) => {
        //     let newObj = {};
        //     for (let i = 0; i < keys.length; i++) {
        //       const key = keys[i];
        //       const value = props.openSubWindow[key];
        //       if (value === true || value === "active") newObj[key] = true;
        //       else newObj[key] = false;
        //     }
        //     // wallpaperSetting: false,
        //     return { ...newObj, 문서: "active" };
        //   });
        //   props.setStartMenuOn(false);
        // }}
      >
        <strong className="cursor">
          <div className="title-bar" style={{ height: "14px" }}>
            <div className="title-bar-text">메모장</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button
                aria-label="Close"
                // onClick={(event) => {
                //   event.stopPropagation();
                //   props.setOpenSubWindow((prev) => ({
                //     ...prev,
                //     문서: false,
                //   }));
                // }}
              />
            </div>
          </div>
        </strong>
        <div
          className="window-body documentMenu"
          style={{
            height: "523px",
            padding: "1px 2px",
            margin: 0,
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Noto Sans KR",
            fontWeight: 300,
          }}
        >
          <ul
            className="document_menu"
            style={{
              display: "flex",
              alignItems: "center",
              height: "22px",
              marginBottom: "2px",
              padding: 0,
            }}
          >
            <li>파일(F)</li>
            <li>편집(E)</li>
            <li>찾기(S)</li>
            <li>도움말(H)</li>
          </ul>
          <textarea
            style={{ height: "100%", resize: "none", fontSize: "15px" }}
          />
          {/* <div
            className="document_content"
            style={{
              padding: "20px",
              boxSizing: "border-box",
              background: "#fff",
              borderTop: "2px solid gray",
              borderLeft: "2px solid gray",
              borderBottom: "1px solid #fff",
              borderRight: "1px solid #fff",
              boxShadow: "-1px -1px inset lightgray",
              overflowY: "scroll",
            }}
          > */}
        </div>
      </div>
    </Draggable>
  );
}
