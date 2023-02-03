import React from "react";
import Window from "./images/windows-4.png";
import WindowBar from "./images/windows-bar.png";
import "98.css";
import "./App.css";

function App() {
  function MainWindow() {
    function StartDetails1() {
      const [isMouseOn, setIsMouseOn] = React.useState({
        Deep1: false,
        Deep2: false,
        Deep3: false,
        Deep4: false,
      });
      function StartDeepDetail4() {
        return (
          <div
            style={{
              position: "absolute",
              left: "140px",
              width: "120px",
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
                alignItems: "center",
                fontFamily: "Noto Sans KR",
                fontWeight: 300,
              }}
            >
              <ul className="StartDeepDetail-ul ">
                <li id="underCons-li">
                  <span className="underConstruction">공사 중...</span>
                </li>
              </ul>
            </div>
          </div>
        );
      }

      function StartDeepDetail3() {
        return (
          <div
            style={{
              position: "absolute",
              left: "140px",
              width: "160px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            className="window"
          >
            <div
              className="window-body"
              style={{
                padding: "1px 2px",
                margin: 0,
                display: "flex",
                alignItems: "center",
                fontFamily: "Noto Sans KR",
                fontWeight: 300,
              }}
            >
              <ul className="StartDeepDetail-ul">
                <li>
                  <img
                    src={require(`../src/images/windows-ie.png`)}
                    style={{ width: "16px", margin: "0 5px 0 3px" }}
                  />
                  <span>React portfolio</span>
                </li>
                <li>
                  <img
                    src={require(`../src/images/windows-ie.png`)}
                    style={{ width: "16px", margin: "0 5px 0 3px" }}
                  />
                  <span>React movieapp</span>
                </li>
              </ul>
            </div>
          </div>
        );
      }

      function StartDeepDetail2() {
        return (
          <div
            style={{
              position: "absolute",
              left: "140px",
              width: "200px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            className="window"
          >
            <div
              className="window-body"
              style={{
                padding: "1px 2px",
                margin: 0,
                display: "flex",
                alignItems: "center",
                fontFamily: "Noto Sans KR",
                fontWeight: 300,
              }}
            >
              <ul className="StartDeepDetail-ul">
                <li>
                  <img
                    src={require(`../src/images/windows-ie.png`)}
                    style={{ width: "16px", margin: "0 5px 0 3px" }}
                  />
                  <span>Momentum clone website</span>
                </li>
              </ul>
            </div>
          </div>
        );
      }

      function StartDeepDetail1() {
        return (
          <div
            style={{
              position: "absolute",
              left: "140px",
              width: "180px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            className="window"
          >
            <div
              className="window-body"
              style={{
                padding: "1px 2px",
                margin: 0,
                display: "flex",
                alignItems: "center",
                fontFamily: "Noto Sans KR",
                fontWeight: 300,
              }}
            >
              <ul className="StartDeepDetail-ul">
                <li>
                  <img
                    src={require(`../src/images/windows-ie.png`)}
                    style={{ width: "16px", margin: "0 5px 0 3px" }}
                  />
                  <span>HTML&CSS Portfolio</span>
                </li>
              </ul>
            </div>
          </div>
        );
      }
      return (
        <div
          style={{
            position: "absolute",
            top: "-50%",
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
            <ul className="StartDetails-ul">
              <li
                onMouseOver={() =>
                  setIsMouseOn((prev) => {
                    return { Deep2: false, Deep1: true };
                  })
                }
                onMouseLeave={() =>
                  setIsMouseOn((prev) => {
                    return { ...prev, Deep1: false };
                  })
                }
              >
                {isMouseOn.Deep1 && <StartDeepDetail1 />}
                <img
                  src={require(`../src/images/icon-html5.png`)}
                  style={{ width: "16px", margin: "0 5px 0 3px" }}
                />
                <span>HTML & CSS</span>
                <div className="startDetail-arrow">▶</div>
              </li>
              <li
                onMouseOver={() =>
                  setIsMouseOn((prev) => {
                    return { Deep1: false, Deep2: true };
                  })
                }
                onMouseLeave={() =>
                  setIsMouseOn((prev) => {
                    return { ...prev, Deep2: false };
                  })
                }
              >
                {isMouseOn.Deep2 && <StartDeepDetail2 />}
                <img
                  src={require(`../src/images/icon-js.png`)}
                  style={{ width: "16px", margin: "0 5px 0 3px" }}
                />
                <span>JavaScript</span>
                <div className="startDetail-arrow">▶</div>
              </li>
              <li
                onMouseOver={() =>
                  setIsMouseOn((prev) => {
                    return { Deep1: false, Deep2: false, Deep3: true };
                  })
                }
                onMouseLeave={() =>
                  setIsMouseOn((prev) => {
                    return { ...prev, Deep3: false };
                  })
                }
              >
                {isMouseOn.Deep3 && <StartDeepDetail3 />}
                <img
                  src={require(`../src/logo.svg`).default}
                  style={{ width: "24px", margin: 0 }}
                />
                <span>React</span>
                <div className="startDetail-arrow">▶</div>
              </li>
              <li
                onMouseOver={() =>
                  setIsMouseOn((prev) => {
                    return {
                      Deep1: false,
                      Deep2: false,
                      Deep3: false,
                      Deep4: true,
                    };
                  })
                }
                onMouseLeave={() =>
                  setIsMouseOn((prev) => {
                    return { ...prev, Deep4: false };
                  })
                }
              >
                {isMouseOn.Deep4 && <StartDeepDetail4 />}
                <img
                  src={require(`../src/images/icon-ts.png`)}
                  style={{ width: "16px", margin: "0 5px 0 3px" }}
                />
                <span>TypeScript</span>
                <div className="startDetail-arrow">▶</div>
              </li>
            </ul>
          </div>
        </div>
      );
    }

    function StartContent() {
      const [isMouseOn, setIsMouseOn] = React.useState({
        Detail1: false,
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
              <li>
                <img
                  src={require(`../src/images/windows-update.png`)}
                  style={{ width: "35px" }}
                />
                Windows Update
              </li>
              <li>
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
                    return { ...prev, Detail1: true };
                  })
                }
                // onMouseLeave={() =>
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
                {isMouseOn.Detail1 && <StartDetails1 />}
              </li>
              <li style={{ cursor: "pointer" }}>
                <img
                  src={require(`../src/images/windows-docs.png`)}
                  style={{ width: "35px" }}
                />
                <span>문서(D)</span>
                {/* <div className="startContent-arrow">▶</div> */}
              </li>
              <li>
                <img
                  src={require(`../src/images/windows-setting.png`)}
                  style={{ width: "45px", marginLeft: "-5px" }}
                />
                <span style={{ marginLeft: "-6px" }}>설정(S)</span>
                <div className="startContent-arrow">▶</div>
              </li>
              <hr />
              <li>
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
      function onMouseLeave() {
        props.setOn(false);
      }
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
          {props.on && <StartContent />}
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
    function FirstAlert() {
      return (
        <div style={{ width: 300 }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">A wild alert!</div>
          </div>

          <div className="window-body">
            <p style={{ textAlign: "center" }}>입장하시겠습니까?</p>
            <div className="field-row" style={{ justifyContent: "center" }}>
              <button>Yes</button>
              <button>네</button>
              <button disabled>아니오</button>
            </div>
          </div>
        </div>
      );
    }
    // Start Contents is on / off
    const [on, setOn] = React.useState(false);
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setOn(false)}
        ></div>
        {/* <FirstAlert /> */}
        <StartLine on={on} setOn={setOn} />
      </>
    );
  }

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
      <MainWindow />
    </div>
  );
}

export default App;
