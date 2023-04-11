import React from "react";
import Draggable from "react-draggable";
import { WindowContext } from "../App";

export default function Notepad(props) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [noteMenu, setNoteMenu] = React.useState(false);
  const [note, setNote] = React.useState("");
  const [maximize, setMaximize] = React.useState(false);
  //   console.log(maximize);
  const divRef = React.useRef();

  let sample = React.useContext(WindowContext);

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
            <li
              onClick={() => {
                setNoteMenu(false);
                setNote("");
              }}
            >
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
            <li
              onClick={(event) => {
                event.stopPropagation();
                props.setOpenSubWindow((prev) => ({
                  ...prev,
                  메모장: false,
                }));
              }}
            >
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
        ref={divRef}
        id={
          props.openSubWindow.메모장 === "active"
            ? "program_active"
            : "program_div"
        }
        className={`window Notepad ${maximize && "maximized"}`}
        onClick={() => {
          const keys = Object.keys(props.openSubWindow);
          props.setOpenSubWindow((prev) => {
            let newObj = {};
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value = props.openSubWindow[key];
              if (value || value === "active") newObj[key] = true;
              else newObj[key] = false;
            }
            return { ...newObj, 메모장: "active" };
          });
        }}
      >
        <strong className="cursor">
          <div
            className="title-bar"
            style={{ height: "14px" }}
            onClick={() => {
              setNoteMenu(false);
            }}
          >
            <div className="title-bar-text">
              <img
                src={require(`../../src/images/icon-notepad.png`)}
                style={{ width: "11px" }}
                alt="notepad_title_image"
              />{" "}
              메모장
            </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button
                aria-label={maximize ? "Restore" : "Maximize"}
                onClick={() => {
                  const keys = Object.keys(props.openSubWindow);
                  props.setOpenSubWindow((prev) => {
                    let newObj = {};
                    for (let i = 0; i < keys.length; i++) {
                      const key = keys[i];
                      const value = props.openSubWindow[key];
                      if (value || value === "active") newObj[key] = true;
                      else newObj[key] = false;
                    }
                    return { ...newObj, 메모장: "active" };
                  });
                  setMaximize((prev) => !prev);
                  divRef.current.removeAttribute("style");
                  divRef.current.classList.remove(
                    "react-draggable",
                    "react-draggable-dragged"
                  );
                }}
              />
              <button
                aria-label="Close"
                onClick={(event) => {
                  event.stopPropagation();
                  props.setOpenSubWindow((prev) => ({
                    ...prev,
                    메모장: false,
                  }));
                }}
              />
            </div>
          </div>
        </strong>
        <div
          className="window-body windowsMenu"
          style={{
            height: "100%",
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
              className={noteMenu ? "menu_selected" : null}
              onClick={() => setNoteMenu((prev) => !prev)}
            >
              파일(F)
            </li>
            <li>편집(E)</li>
            <li>찾기(S)</li>
            <li>도움말(H)</li>
            {/* <li>{sample[0]}</li> */}
            <div
              style={{ width: "45.5%", height: "22px" }}
              onClick={(event) => {
                setNoteMenu(false);
              }}
            />
          </ul>
          <textarea
            style={{
              height: "100%",
              resize: "none",
              fontSize: "15px",
              fontFamily: "Noto Sans KR",
              fontWeight: "300",
            }}
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
