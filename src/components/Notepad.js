import React from "react";
import Draggable from "react-draggable";

export default function Notepad(props) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [noteMenu, setNoteMenu] = React.useState(false);
  const [note, setNote] = React.useState("");

  function handleNote(event) {
    const { value } = event.target;
    setNote((prev) => value);
  }

  function NotepadMenu() {
    return (
      <div
        style={{
          position: "absolute",
          left: "4px",
          top: "48px",
          width: "180px",
          boxSizing: "border-box",
        }}
        className="window"
      >
        <div
          className="window-body"
          style={{
            padding: "1px",
            margin: 0,
            display: "flex",
            alignItems: "center",
            fontFamily: "Noto Sans KR",
            fontWeight: 300,
          }}
        >
          <ul
            className="Notepad_ul"
            style={{
              width: "100%",
              padding: "0",
              fontSize: "13px",
            }}
          >
            <li onClick={() => setNoteMenu(false)}>
              <span>새로 만들기(N)</span>
              <span>CTRL+N</span>
            </li>
            <li onClick={() => setNoteMenu(false)}>
              <a
                href={`data:text/plain;charset=utf-8,${note}`}
                download="note.txt"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>저장(S)</span>
                <span>CTRL+S</span>
              </a>
            </li>
            <hr />
            <li onClick={() => setNoteMenu(false)}>
              <span>끝내기(X)</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

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
          className="window-body windowsMenu"
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
          {noteMenu && <NotepadMenu />}
          <ul
            className="windows_menu"
            style={{
              display: "flex",
              alignItems: "center",
              height: "22px",
              marginBottom: "2px",
              padding: 0,
            }}
          >
            <li
              className={noteMenu && "menu_selected"}
              onClick={() => setNoteMenu((prev) => !prev)}
            >
              파일(F)
            </li>
            <li>편집(E)</li>
            <li>찾기(S)</li>
            <li>도움말(H)</li>
          </ul>
          <textarea
            style={{ height: "100%", resize: "none", fontSize: "15px" }}
            onClick={() => setNoteMenu(false)}
            onChange={(event) => handleNote(event)}
            value={note}
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
