import React from "react";

export default function WallpaperSetting(props) {
  return (
    <div
      className="window"
      style={{
        position: "absolute",
        margin: "0 auto",
        width: "400px",
        height: "420px",
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">바탕화면 설정</div>
        <div className="title-bar-controls">
          <button aria-label="Help" />
          <button
            aria-label="Close"
            onClick={() => props.setOpenSetting(false)}
          />
        </div>
      </div>
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
              className={props.wallpaper.wall1 ? "wallpaper_selected" : ""}
              onClick={() =>
                props.setWallpaper({
                  wall1: true,
                  wall2: false,
                  wall3: false,
                  wall4: false,
                  wall5: false,
                })
              }
            >
              윈도우 98
            </li>
            <li
              className={props.wallpaper.wall2 ? "wallpaper_selected" : ""}
              onClick={() =>
                props.setWallpaper({
                  wall2: true,
                  wall1: false,
                  wall3: false,
                  wall4: false,
                  wall5: false,
                })
              }
            >
              윈도우 98(Blue Theme)
            </li>
            <li
              className={props.wallpaper.wall3 ? "wallpaper_selected" : ""}
              onClick={() =>
                props.setWallpaper({
                  wall3: true,
                  wall1: false,
                  wall2: false,
                  wall4: false,
                  wall5: false,
                })
              }
            >
              숲
            </li>
            <li
              className={props.wallpaper.wall4 ? "wallpaper_selected" : ""}
              onClick={() =>
                props.setWallpaper({
                  wall4: true,
                  wall1: false,
                  wall2: false,
                  wall3: false,
                  wall5: false,
                })
              }
            >
              구름
            </li>
            <li
              className={props.wallpaper.wall5 ? "wallpaper_selected" : ""}
              onClick={() =>
                props.setWallpaper({
                  wall5: true,
                  wall1: false,
                  wall2: false,
                  wall3: false,
                  wall4: false,
                })
              }
            >
              기본
            </li>
          </ul>
        </fieldset>
        <div
          style={{
            margin: "20px 30px",
            display: "grid",
            gridTemplate: "30px 30px / 1fr 1fr",
            gridGap: "10px",
          }}
        >
          <button
            onClick={() => {
              props.setChangeWall(props.sampleImage);
              props.setOpenSetting(false);
            }}
          >
            확인
          </button>
          <button
            onClick={() => {
              props.setChangeWall(props.sampleImage);
            }}
          >
            적용
          </button>
        </div>
      </div>
    </div>
  );
}
