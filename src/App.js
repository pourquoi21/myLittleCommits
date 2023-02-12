import React from "react";
import "98.css";
import "./App.css";
import MainWindow from "./components/MainWindow";

import WallpaperSetting from "./components/WallpaperSetting";
import wallpaper1 from "./images/wallpaper1.jpg";
import wallpaper2 from "./images/wallpaper2.jpg";
import wallpaper3 from "./images/wallpaper3.jpg";
import wallpaper4 from "./images/wallpaper4.jpg";
import DocumentMenu from "./components/DocumentMenu";

function App() {
  // Start Contents is on / off, when background is clicked it goes off
  const [startMenuOn, setStartMenuOn] = React.useState(false);
  const [crtOn, setCrtOn] = React.useState(true);
  const [openSubWindow, setOpenSubWindow] = React.useState({
    wallpaperSetting: false,
    document: false,
  });
  const [wallpaperList, setWallpaperList] = React.useState({
    wall1: true,
    wall2: false,
    wall3: false,
    wall4: false,
    wall5: false,
  });
  const [changeWall, setChangeWall] = React.useState("");
  const [openProgramsList, setOpenProgramsList] = React.useState([]);

  let sampleImage;
  if (wallpaperList.wall1) sampleImage = wallpaper1;
  else if (wallpaperList.wall2) sampleImage = wallpaper2;
  else if (wallpaperList.wall3) sampleImage = wallpaper3;
  else if (wallpaperList.wall4) sampleImage = wallpaper4;
  else sampleImage = null;

  // let currentOpenProgramList = [];
  // if (openSubWindow.wallpaperSetting)
  //   setOpenProgramsList((prev) => [...prev, "바탕화면 설정"]);
  // else if (openSubWindow.document)
  //   setOpenProgramsList((prev) => [...prev, "문서"]);
  // else return;

  return (
    <div
      className="App"
      style={{
        position: "relative",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={`crt ${crtOn ? "null" : "none"}`}
        style={{
          height: "100vh",
          width: "100vw",
          // zIndex: "20",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={() => setStartMenuOn(false)}
      />
      {openSubWindow.document && <DocumentMenu />}
      {openSubWindow.wallpaperSetting && (
        <WallpaperSetting
          setOpenSubWindow={setOpenSubWindow}
          wallpaperList={wallpaperList}
          setWallpaperList={setWallpaperList}
          sampleImage={sampleImage}
          setChangeWall={setChangeWall}
          setOpenProgramsList={setOpenProgramsList}
        />
      )}

      <MainWindow
        startMenuOn={startMenuOn}
        setStartMenuOn={setStartMenuOn}
        crtOn={crtOn}
        setCrtOn={setCrtOn}
        openSubWindow={openSubWindow}
        setOpenSubWindow={setOpenSubWindow}
        changeWall={changeWall}
        openProgramsList={openProgramsList}
        setOpenProgramsList={setOpenProgramsList}
      />
    </div>
  );
}

export default App;
