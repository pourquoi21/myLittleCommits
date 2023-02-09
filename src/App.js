import React from "react";
import Window from "./images/windows-4.png";
import WindowBar from "./images/windows-bar.png";
import "98.css";
import "./App.css";
import StartDetails1 from "./components/StartDetails1";
import StartDetails2 from "./components/StartDetails2";
import WallpaperSetting from "./components/WallpaperSetting";
import wallpaper1 from "./images/wallpaper1.jpg";
import wallpaper2 from "./images/wallpaper2.jpg";
import wallpaper3 from "./images/wallpaper3.jpg";
import wallpaper4 from "./images/wallpaper4.jpg";

function App() {
  function StartContent(props) {
    const [isMouseOn, setIsMouseOn] = React.useState({
      Detail1: false,
      Detail2: false,
    });

    return (
      <div
        style={{
          position: "absolute",
          bottom: "34px",
          left: 0,
          width: "250px",
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
          <img src={WindowBar} />
          <ul className="startContent-ul">
            <li
              onMouseOver={() =>
                setIsMouseOn({
                  Detail1: false,
                })
              }
            >
              <img
                src={require(`../src/images/windows-update.png`)}
                style={{ width: "35px" }}
              />
              Windows Update
            </li>
            <li
              onMouseOver={() =>
                setIsMouseOn({
                  Detail1: false,
                })
              }
            >
              <img
                src={require(`../src/images/windows-ie.png`)}
                style={{ width: "35px" }}
              />
              Internet Explorer
            </li>
            <hr />
            <li
              style={{ position: "relative" }}
              onMouseOver={() =>
                setIsMouseOn((prev) => {
                  return { Detail2: false, Detail1: true };
                })
              }
            >
              <img
                src={require(`../src/images/windows-program.png`)}
                style={{
                  width: "35px",
                }}
              />
              <span>프로그램(P)</span>
              <div className="startContent-arrow">▶</div>
              {isMouseOn.Detail1 && <StartDetails1 setOn={props.setOn} />}
            </li>
            <li
              style={{ cursor: "pointer" }}
              onMouseOver={() =>
                setIsMouseOn({
                  Detail1: false,
                  Detail: false,
                })
              }
            >
              <img
                src={require(`../src/images/windows-docs.png`)}
                style={{ width: "35px" }}
              />
              <span>문서(D)</span>
              {/* <div className="startContent-arrow">▶</div> */}
            </li>
            <li
              style={{ position: "relative" }}
              onMouseOver={() =>
                setIsMouseOn({
                  Detail1: false,
                  Detail2: true,
                })
              }
            >
              <img
                src={require(`../src/images/windows-setting.png`)}
                style={{ width: "45px", marginLeft: "-5px" }}
              />
              <span style={{ marginLeft: "-6px" }}>설정(S)</span>
              <div className="startContent-arrow">▶</div>
              {isMouseOn.Detail2 && (
                <StartDetails2
                  setCrtOn={props.setCrtOn}
                  crtOn={props.crtOn}
                  setOn={props.setOn}
                  setOpenSetting={props.setOpenSetting}
                  setOpenProgramsList={props.setOpenProgramsList}
                />
              )}
            </li>
            <hr />
            <li
              onMouseOver={() =>
                setIsMouseOn({
                  Detail1: false,
                })
              }
            >
              <img
                src={require(`../src/images/windows-shutdown.png`)}
                style={{ width: "45px", marginLeft: "-5px" }}
              />
              <span style={{ marginLeft: "-6px" }}>시스템 종료(U)...</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  function StartLine(props) {
    // onMouseLeave, Start Contents is closed
    // function onMouseLeave() {
    //   props.setOn(false);
    // }

    return (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          cursor: "default",
          fontFamily: "Noto Sans KR",
        }}
        className="window"
        // onMouseLeave={onMouseLeave}
      >
        {props.on && (
          <StartContent
            setCrtOn={props.setCrtOn}
            crtOn={props.crtOn}
            setOn={props.setOn}
            setOpenSetting={props.setOpenSetting}
            setOpenProgramsList={props.setOpenProgramsList}
          />
        )}
        <div
          className="window-body"
          style={{
            padding: "3px",
            margin: 0,
            display: "flex",
          }}
        >
          <button
            style={{
              boxSizing: "border-box",
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Window}
              style={{
                width: "20px",
                marginRight: "4px",
              }}
            />
            <div
              style={{
                fontSize: "16px",
                fontWeight: "800",
                letterSpacing: "0.5px",
                fontFamily: "Noto Sans KR",
              }}
              onClick={() => props.setOn((prev) => !prev)}
            >
              시작
            </div>
          </button>
          // needs map here for indicating open programs' names
          <input
            disabled
            type="text"
            value="Well.."
            style={{ height: "3em", marginLeft: "auto" }}
          />
        </div>
      </div>
    );
  }
  function MainWindow(props) {
    // function FirstAlert() {
    //   return (
    //     <div style={{ width: 300 }} className="window">
    //       <div className="title-bar">
    //         <div className="title-bar-text">A wild alert!</div>
    //       </div>

    //       <div className="window-body">
    //         <p style={{ textAlign: "center" }}>입장하시겠습니까?</p>
    //         <div className="field-row" style={{ justifyContent: "center" }}>
    //           <button>Yes</button>
    //           <button>네</button>
    //           <button disabled>아니오</button>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <>
        <div
          style={{
            height: "100%",
            width: "100%",
            // boxSizing: "border-box",
            backgroundColor: "#008080",
            backgroundImage: `URL(${props.changeWall})`,
            backgroundSize: "cover",
            padding: "2vh 2vw",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          <div
            className="icon-line"
            style={{
              width: "50px",
              height: "100vh",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "50px 0",
            }}
          >
            <div className="icon">
              <img
                src={require(`../src/images/windows-bin_full.png`)}
                style={{ width: "50px", marginBottom: "5px" }}
              />
              <span>휴지통</span>
            </div>
            <div className="icon">
              <img
                src={require(`../src/images/windows-notepad.png`)}
                style={{ width: "50px", marginBottom: "5px" }}
              />
              <span>메모장</span>
            </div>
          </div>
        </div>
        {/* <FirstAlert /> */}
        <StartLine
          on={props.on}
          setOn={props.setOn}
          crtOn={props.crtOn}
          setCrtOn={props.setCrtOn}
          setOpenSetting={props.setOpenSetting}
          setOpenProgramsList={props.setOpenProgramsList}
        />
      </>
    );
  }

  // Start Contents is on / off, when background is clicked it goes off
  const [on, setOn] = React.useState(false);
  const [crtOn, setCrtOn] = React.useState(true);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [wallpaperList, setWallpaperList] = React.useState({
    wall1: true,
    wall2: false,
    wall3: false,
    wall4: false,
    wall5: false,
  });
  const [changeWall, setChangeWall] = React.useState("");
  const [openProgramsList, setOpenProgramsList] = React.useState([]);

  console.log(openProgramsList);
  let sampleImage;
  if (wallpaperList.wall1) sampleImage = wallpaper1;
  else if (wallpaperList.wall2) sampleImage = wallpaper2;
  else if (wallpaperList.wall3) sampleImage = wallpaper3;
  else if (wallpaperList.wall4) sampleImage = wallpaper4;
  else sampleImage = null;

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
        onClick={() => setOn(false)}
      />
      {openSetting && (
        <WallpaperSetting
          setOpenSetting={setOpenSetting}
          wallpaperList={wallpaperList}
          setWallpaperList={setWallpaperList}
          sampleImage={sampleImage}
          setChangeWall={setChangeWall}
          setOpenProgramsList={setOpenProgramsList}
        />
      )}
      <MainWindow
        on={on}
        setOn={setOn}
        crtOn={crtOn}
        setCrtOn={setCrtOn}
        setOpenSetting={setOpenSetting}
        changeWall={changeWall}
        setOpenProgramsList={setOpenProgramsList}
      />
    </div>
  );
}

export default App;
