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
  function MainWindow(props) {
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
                // onMouseLeave={() =>데
                //   setIsMouseOn((prev) => {
                //     return { ...prev, Detail1: false };
                //   })
                // }
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
            />
          )}
          <div
            className="window-body"
            style={{
              padding: "3px",
              margin: 0,
              display: "flex",
              justifyContent: "space-between",
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
            <input
              disabled
              type="text"
              value="Well.."
              style={{ height: "3em" }}
            />
          </div>
        </div>
      );
    }
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
      // <div
      //   style={{
      //     width: "100%",
      //     height: "100%",
      //     boxSizing: "border-box",
      //   }}
      //   className="window"
      // >
      //   <div className="title-bar">
      //     <div className="title-bar-text">Hello, I am Jara</div>
      //     <div className="title-bar-controls">
      //       <button aria-label="Minimize" />
      //       <button aria-label="Maximize" />
      //       <button aria-label="Close" />
      //     </div>
      //   </div>
      <>
        <div
          style={{
            height: "100%",
            width: "100%",
            // boxSizing: "border-box",
            backgroundColor: "#008080",
            backgroundImage: `URL(${props.changeWall})`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        {/* <FirstAlert /> */}
        <StartLine
          on={props.on}
          setOn={props.setOn}
          setCrtOn={props.setCrtOn}
          crtOn={props.crtOn}
          setOpenSetting={props.setOpenSetting}
        />
      </>
    );
  }

  // function WallpaperSetting(props) {
  //   return (
  //     <div
  //       className="window"
  //       style={{
  //         position: "absolute",
  //         margin: "0 auto",
  //         width: "400px",
  //         height: "420px",
  //       }}
  //     >
  //       <div className="title-bar">
  //         <div className="title-bar-text">바탕화면 설정</div>
  //         <div className="title-bar-controls">
  //           <button aria-label="Help" />
  //           <button
  //             aria-label="Close"
  //             onClick={() => props.setOpenSetting(false)}
  //           />
  //         </div>
  //       </div>
  //       <div className="window-body">
  //         <div
  //           className="wallpaper_monitor"
  //           style={{
  //             margin: "30px auto",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //             width: "180px",
  //             height: "115px",
  //             background: "#ccc",
  //             borderRight: "2px solid #999",
  //             borderBottom: "2px solid #999",
  //             borderLeft: "2px solid #fff",
  //             borderTop: "2px solid #fff",
  //           }}
  //         >
  //           <div
  //             className="wallpaper_ex"
  //             style={{
  //               width: "155px",
  //               height: "90px",
  //               background: "#008080",
  //               backgroundImage: `URL(${props.backgroundImage})`,
  //               backgroundSize: "155px",
  //               borderRight: "2px solid #fff",
  //               borderBottom: "2px solid #fff",
  //               borderLeft: "2px solid #999",
  //               borderTop: "2px solid #999",
  //             }}
  //           />
  //         </div>
  //         <fieldset
  //           style={{
  //             margin: "10px 30px",
  //           }}
  //         >
  //           <legend>바탕화면 설정</legend>
  //           <ul className="tree-view wallpaper_ul">
  //             <li
  //               className={props.wallpaper.wall1 ? "wallpaper_selected" : ""}
  //               onClick={() =>
  //                 props.setWallpaper({
  //                   wall1: true,
  //                   wall2: false,
  //                   wall3: false,
  //                   wall4: false,
  //                   wall5: false,
  //                 })
  //               }
  //             >
  //               윈도우 98
  //             </li>
  //             <li
  //               className={props.wallpaper.wall2 ? "wallpaper_selected" : ""}
  //               onClick={() =>
  //                 props.setWallpaper({
  //                   wall2: true,
  //                   wall1: false,
  //                   wall3: false,
  //                   wall4: false,
  //                   wall5: false,
  //                 })
  //               }
  //             >
  //               윈도우 98(Blue Theme)
  //             </li>
  //             <li
  //               className={props.wallpaper.wall3 ? "wallpaper_selected" : ""}
  //               onClick={() =>
  //                 props.setWallpaper({
  //                   wall3: true,
  //                   wall1: false,
  //                   wall2: false,
  //                   wall4: false,
  //                   wall5: false,
  //                 })
  //               }
  //             >
  //               숲
  //             </li>
  //             <li
  //               className={props.wallpaper.wall4 ? "wallpaper_selected" : ""}
  //               onClick={() =>
  //                 props.setWallpaper({
  //                   wall4: true,
  //                   wall1: false,
  //                   wall2: false,
  //                   wall3: false,
  //                   wall5: false,
  //                 })
  //               }
  //             >
  //               구름
  //             </li>
  //             <li
  //               className={props.wallpaper.wall5 ? "wallpaper_selected" : ""}
  //               onClick={() =>
  //                 props.setWallpaper({
  //                   wall5: true,
  //                   wall1: false,
  //                   wall2: false,
  //                   wall3: false,
  //                   wall4: false,
  //                 })
  //               }
  //             >
  //               기본
  //             </li>
  //           </ul>
  //         </fieldset>
  //         <div
  //           style={{
  //             margin: "20px 30px",
  //             display: "grid",
  //             gridTemplate: "30px 30px / 1fr 1fr",
  //             gridGap: "10px",
  //           }}
  //         >
  //           <button onClick={() => console.log(props.backgroundImage)}>
  //             확인
  //           </button>
  //           <button>적용</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // Start Contents is on / off, when background is clicked it goes off
  const [on, setOn] = React.useState(false);
  const [crtOn, setCrtOn] = React.useState(true);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [wallpaper, setWallpaper] = React.useState({
    wall1: true,
    wall2: false,
    wall3: false,
    wall4: false,
    wall5: false,
  });
  const [changeWall, setChangeWall] = React.useState("");
  let sampleImage;
  if (wallpaper.wall1) sampleImage = wallpaper1;
  else if (wallpaper.wall2) sampleImage = wallpaper2;
  else if (wallpaper.wall3) sampleImage = wallpaper3;
  else if (wallpaper.wall4) sampleImage = wallpaper4;
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
          wallpaper={wallpaper}
          setWallpaper={setWallpaper}
          sampleImage={sampleImage}
          setChangeWall={setChangeWall}
        />
      )}
      <MainWindow
        on={on}
        setOn={setOn}
        setCrtOn={setCrtOn}
        crtOn={crtOn}
        setOpenSetting={setOpenSetting}
        changeWall={changeWall}
      />
    </div>
  );
}

export default App;
