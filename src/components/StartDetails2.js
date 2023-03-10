import React from "react";

function StartDetails2(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "218px",
        width: "150px",
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
        <ul
          className="StartDetails-ul"
          onClick={() => {
            props.setOnAndOff((prev) => {
              return { ...prev, startMenu: false };
            });
          }}
        >
          <li
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
                // wallpaperSetting: false,
                return { ...newObj, "바탕화면 설정": "active" };
              });
              // props.setOpenProgramsList((prev) => {
              //   return [...prev, "바탕화면 설정"];
              // });
            }}
          >
            {/* {isMouseOn.Deep1 && <StartDeepDetail1 />} */}
            <img
              src={require(`../../src/images/windows-wall.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
              onClick={(event) => event.stopPropagation()}
            />
            <span>바탕화면 설정</span>
            {/* <div className="startDetail-arrow">▶</div> */}
          </li>
          <li
            onClick={() => {
              props.setOnAndOff((prev) => {
                return { ...prev, crt: !prev.crt };
              });
            }}
          >
            {/* {isMouseOn.Deep2 && <StartDeepDetail2 />} */}
            <img
              src={require(`../../src/images/windows-monitor.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
            />
            <span>CRT효과 {props.onAndOff.crt ? "끄기" : "켜기"}...</span>
            {/* <div className="startDetail-arrow">▶</div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default React.memo(StartDetails2);
