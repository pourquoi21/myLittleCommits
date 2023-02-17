import React from "react";
import Draggable from "react-draggable";

export default function WallpaperSetting(props) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <Draggable onDrag={(e, data) => trackPos(data)} handle="strong">
      <div
        id={
          props.openSubWindow["바탕화면 설정"] === "active"
            ? "program_active"
            : "program_div"
        }
        className="window"
        style={{
          position: "absolute",
          margin: "0 auto",
          width: "400px",
          height: "420px",
        }}
        onClick={() => {
          const keys = Object.keys(props.openSubWindow);
          props.setOpenSubWindow((prev) => {
            let newObj = {};
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value = props.openSubWindow[key];
              if (value === true || value === "active") newObj[key] = true;
              else newObj[key] = false;
            }
            // wallpaperSetting: false,
            return { ...newObj, "바탕화면 설정": "active" };
          });
          props.setStartMenuOn(false);
        }}
      >
        <strong className="cursor">
          <div className="title-bar">
            <div className="title-bar-text">바탕화면 설정</div>
            <div className="title-bar-controls">
              <button aria-label="Help" />
              <button
                aria-label="Close"
                onClick={(event) => {
                  event.stopPropagation();
                  props.setOpenSubWindow((prev) => ({
                    ...prev,
                    "바탕화면 설정": false,
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
        </strong>
        <div className="window-body">
          <div
            className="wallpaper_monitor"
            style={{
              margin: "30px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "180px",
              height: "115px",
              background: "#ccc",
              borderRight: "2px solid #999",
              borderBottom: "2px solid #999",
              borderLeft: "2px solid #fff",
              borderTop: "2px solid #fff",
            }}
          >
            <div
              className="wallpaper_ex"
              style={{
                width: "155px",
                height: "90px",
                background: "#008080",
                backgroundImage: `URL(${props.sampleImage})`,
                backgroundSize: "155px",
                borderRight: "2px solid #fff",
                borderBottom: "2px solid #fff",
                borderLeft: "2px solid #999",
                borderTop: "2px solid #999",
              }}
            />
          </div>
          <fieldset
            style={{
              margin: "10px 30px",
            }}
          >
            <legend>바탕화면 설정</legend>
            <ul className="tree-view wallpaper_ul">
              <li
                className={
                  props.wallpaperList.wall1 ? "wallpaper_selected" : ""
                }
                onClick={() =>
                  props.setWallpaperList({
                    wall1: true,
                    wall2: false,
                    wall3: false,
                    wall4: false,
                    wall5: false,
                  })
                }
              >
                <img
                  src={require(`../images/windows-paint.png`)}
                  style={{ width: "14px", marginBottom: "-2px" }}
                />{" "}
                윈도우 98
              </li>
              <li
                className={
                  props.wallpaperList.wall2 ? "wallpaper_selected" : ""
                }
                onClick={() =>
                  props.setWallpaperList({
                    wall2: true,
                    wall1: false,
                    wall3: false,
                    wall4: false,
                    wall5: false,
                  })
                }
              >
                <img
                  src={require(`../images/windows-paint.png`)}
                  style={{ width: "14px", marginBottom: "-2px" }}
                />{" "}
                윈도우 98(Blue Theme)
              </li>
              <li
                className={
                  props.wallpaperList.wall3 ? "wallpaper_selected" : ""
                }
                onClick={() =>
                  props.setWallpaperList({
                    wall3: true,
                    wall1: false,
                    wall2: false,
                    wall4: false,
                    wall5: false,
                  })
                }
              >
                <img
                  src={require(`../images/windows-paint.png`)}
                  style={{ width: "14px", marginBottom: "-2px" }}
                />{" "}
                숲
              </li>
              <li
                className={
                  props.wallpaperList.wall4 ? "wallpaper_selected" : ""
                }
                onClick={() =>
                  props.setWallpaperList({
                    wall4: true,
                    wall1: false,
                    wall2: false,
                    wall3: false,
                    wall5: false,
                  })
                }
              >
                <img
                  src={require(`../images/windows-paint.png`)}
                  style={{ width: "14px", marginBottom: "-2px" }}
                />{" "}
                구름
              </li>
              <li
                className={
                  props.wallpaperList.wall5 ? "wallpaper_selected" : ""
                }
                onClick={() =>
                  props.setWallpaperList({
                    wall5: true,
                    wall1: false,
                    wall2: false,
                    wall3: false,
                    wall4: false,
                  })
                }
              >
                <img
                  src={require(`../images/windows-paint.png`)}
                  style={{ width: "14px", marginBottom: "-2px" }}
                />{" "}
                기본
              </li>
            </ul>
          </fieldset>
          <div
            style={{
              margin: "20px 30px",
              display: "flex",
              justifyContent: "flex-end",
              zIndex: "6",
            }}
          >
            <button
              style={{
                width: "100px",
                height: "30px",
                marginRight: "10px",
              }}
              onClick={(event) => {
                event.stopPropagation();
                props.setChangeWall(props.sampleImage);
                props.setOpenSubWindow((prev) => ({
                  ...prev,
                  "바탕화면 설정": false,
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
            >
              확인
            </button>
            <button
              style={{ width: "100px", height: "30px" }}
              onClick={() => {
                props.setChangeWall(props.sampleImage);
              }}
            >
              적용
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
