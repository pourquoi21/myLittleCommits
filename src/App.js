import React from "react";
import "98.css";
import "./App.css";
import MainWindow from "./components/MainWindow";
import WallpaperSetting from "./components/WallpaperSetting";
import DocumentMenu from "./components/DocumentMenu";
import Notepad from "./components/Notepad";
import wallpaper1 from "./images/wallpaper1.jpg";
import wallpaper2 from "./images/wallpaper2.jpg";
import wallpaper3 from "./images/wallpaper3.jpg";
import wallpaper4 from "./images/wallpaper4.jpg";
import SystemShutDown from "./components/SystemShutDown";
export const WindowContext = React.createContext();

function App() {
  // function SystemShutDown(props) {
  //   return (
  //     <div
  //       className="shutdown_shadow"
  //       style={{
  //         position: "absolute",
  //         width: "100vw",
  //         height: "100vh",
  //         background: "rgba(0, 0, 0, 0.5)",
  //         zIndex: "8",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         flexWrap: "wrap",
  //       }}
  //     >
  //       <div
  //         className="window"
  //         style={{ width: "450px", height: "230px", boxSizing: "border-box" }}
  //       >
  //         <div className="title-bar">
  //           <div className="title-bar-text">시스템 종료...</div>
  //           <div className="title-bar-controls">
  //             <button
  //               onClick={props.setShutDown(false)}
  //               aria-label="Close"
  //             ></button>
  //           </div>
  //         </div>
  //         <div
  //           className="window-body"
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             padding: "8px 0 25px 0",
  //             boxSizing: "border-box",
  //           }}
  //         >
  //           <div style={{ display: "flex" }}>
  //             <div style={{ width: "100px" }}>
  //               <img src={require(`../src/images/windows-shutdown.png`)} />
  //             </div>
  //             <div className="shutdown_content">
  //               <p>다음 중에서 선택하십시오.</p>
  //               <div className="field-row">
  //                 <input
  //                   defaultChecked
  //                   id="radio1"
  //                   type="radio"
  //                   name="second-example"
  //                 />
  //                 <label htmlFor="radio1">시스템 종료(S)</label>
  //               </div>
  //               <div className="field-row">
  //                 <input
  //                   disabled
  //                   id="radio2"
  //                   type="radio"
  //                   name="second-example"
  //                 />
  //                 <label htmlFor="radio2">시스템 대기(T)</label>
  //               </div>
  //               <div className="field-row">
  //                 <input
  //                   disabled
  //                   id="radio3"
  //                   type="radio"
  //                   name="second-example"
  //                 />
  //                 <label htmlFor="radio3">시스템 다시 시작(R)</label>
  //               </div>
  //               <div className="field-row">
  //                 <input
  //                   disabled
  //                   id="radio4"
  //                   type="radio"
  //                   name="second-example"
  //                 />
  //                 <label htmlFor="radio4">
  //                   MS-DOS모드에서 시스템 다시 시작(M)
  //                 </label>
  //               </div>
  //             </div>
  //           </div>
  //           <div
  //             className="shutdown_button"
  //             style={{ margin: "25px auto 0 auto", boxSizing: "border-box" }}
  //           >
  //             <button style={{ marginRight: "20px" }}>확인</button>
  //             <button onClick={props.setShutDown(false)}>취소</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // Start Contents is on / off, when background is clicked it goes off
  const [onAndOff, setOnAndOff] = React.useState({
    startMenu: false,
    crt: true,
    shutDown: false,
    shutDownClicked: false,
  });

  // console.log(onAndOff.shutDownClicked);
  // console.log(onAndOff);
  // const [startMenuOn, setStartMenuOn] = React.useState(false);
  // const [crtOn, setCrtOn] = React.useState(true);
  const [openSubWindow, setOpenSubWindow] = React.useState({
    메모장: false,
    "바탕화면 설정": false,
    문서: false,
  });
  const [shutDown, setShutDown] = React.useState(false);
  // console.log(shutDown);
  // const [isProgActive, setIsProgActive] = React.useState({
  //   "바탕화면 설정": false,
  //   문서: false,
  // });

  // const [currentOpenProgramObj, setCurrentOpenProgramObj] = React.useState({
  //   "바탕화면 설정": openSubWindow.wallpaperSetting,
  //   문서: openSubWindow.document,
  // });

  // console.log(openSubWindow);
  // // console.log(currentOpenProgramObj);
  // console.log(openSubWindow.문서);
  // console.log(openSubWindow["바탕화면 설정"]);

  const [wallpaperList, setWallpaperList] = React.useState({
    wall1: true,
    wall2: false,
    wall3: false,
    wall4: false,
    wall5: false,
  });
  const [changeWall, setChangeWall] = React.useState("");

  let sampleImage;
  if (wallpaperList.wall1) sampleImage = wallpaper1;
  else if (wallpaperList.wall2) sampleImage = wallpaper2;
  else if (wallpaperList.wall3) sampleImage = wallpaper3;
  else if (wallpaperList.wall4) sampleImage = wallpaper4;
  else sampleImage = null;

  // const [sample, setSample] = React.useState([10, 11, 12]);

  return (
    // <WindowContext.Provider value={sample}>
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
        overflow: "hidden",
      }}
    >
      <div
        className={`crt ${onAndOff.crt ? "null" : "none"}`}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={() => {
          // setStartMenuOn(false);
          setOnAndOff((prev) => {
            return {
              ...prev,
              startMenu: false,
            };
          });
        }}
      />
      {onAndOff.shutDownClicked ? null : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {(openSubWindow.문서 || openSubWindow.문서 == "active") && (
            <DocumentMenu
              setOnAndOff={setOnAndOff}
              openSubWindow={openSubWindow}
              setOpenSubWindow={setOpenSubWindow}
            />
          )}
          {openSubWindow["바탕화면 설정"] ||
          openSubWindow["바탕화면 설정"] == "active" ? (
            <WallpaperSetting
              setOnAndOff={setOnAndOff}
              openSubWindow={openSubWindow}
              setOpenSubWindow={setOpenSubWindow}
              wallpaperList={wallpaperList}
              setWallpaperList={setWallpaperList}
              sampleImage={sampleImage}
              setChangeWall={setChangeWall}
            />
          ) : (
            ""
          )}
          {(openSubWindow.메모장 || openSubWindow.메모장 == "active") && (
            <Notepad
              openSubWindow={openSubWindow}
              setOpenSubWindow={setOpenSubWindow}
            />
          )}
          {/* <MainWindowContainer /> */}
          <MainWindow
            onAndOff={onAndOff}
            setOnAndOff={setOnAndOff}
            openSubWindow={openSubWindow}
            setOpenSubWindow={setOpenSubWindow}
            changeWall={changeWall}
            setShutDown={setShutDown}
          />
        </div>
      )}
      {shutDown && onAndOff.shutDownClicked == false && (
        <SystemShutDown setShutDown={setShutDown} setOnAndOff={setOnAndOff} />
      )}
    </div>
    // </WindowContext.Provider>
  );
}

export default App;
