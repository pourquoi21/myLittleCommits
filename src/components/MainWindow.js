import React from "react";
import Window from "../images/windows-4.png";
import WindowBar from "../images/windows-bar.png";
import StartDetails1 from "./StartDetails1";
import StartDetails2 from "./StartDetails2";
import DocumentMenu from "./DocumentMenu";

function MainWindow(props) {
  function StartContent(props) {
    const [isSubOn, setIsSubOn] = React.useState({
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
                setIsSubOn({
                  Detail1: false,
                })
              }
            >
              <img
                src={require(`../../src/images/windows-update.png`)}
                style={{ width: "35px" }}
              />
              Windows Update
            </li>
            <li
              onMouseOver={() =>
                setIsSubOn({
                  Detail1: false,
                })
              }
            >
              <img
                src={require(`../../src/images/windows-ie.png`)}
                style={{ width: "35px" }}
              />
              Internet Explorer
            </li>
            <hr />
            <li
              style={{ position: "relative" }}
              onMouseOver={() =>
                setIsSubOn((prev) => {
                  return { Detail2: false, Detail1: true };
                })
              }
            >
              <img
                src={require(`../../src/images/windows-program.png`)}
                style={{
                  width: "35px",
                }}
              />
              <span>프로그램(P)</span>
              <div className="startContent-arrow">▶</div>
              {isSubOn.Detail1 && (
                <StartDetails1 setStartMenuOn={props.setStartMenuOn} />
              )}
            </li>
            <li
              style={{ cursor: "pointer" }}
              onMouseOver={() =>
                setIsSubOn({
                  Detail1: false,
                  Detail2: false,
                })
              }
              onClick={() => {
                props.setOpenSubWindow((prev) => ({
                  wallpaperSetting: false,
                  document: true,
                }));
                props.setStartMenuOn(false);
              }}
            >
              <img
                src={require(`../../src/images/windows-docs.png`)}
                style={{ width: "35px" }}
              />
              <span>문서(D)</span>
              {/* <div className="startContent-arrow">▶</div> */}
            </li>
            <li
              style={{ position: "relative" }}
              onMouseOver={() =>
                setIsSubOn({
                  Detail1: false,
                  Detail2: true,
                })
              }
            >
              <img
                src={require(`../../src/images/windows-setting.png`)}
                style={{ width: "45px", marginLeft: "-5px" }}
              />
              <span style={{ marginLeft: "-6px" }}>설정(S)</span>
              <div className="startContent-arrow">▶</div>
              {isSubOn.Detail2 && (
                <StartDetails2
                  setCrtOn={props.setCrtOn}
                  crtOn={props.crtOn}
                  setStartMenuOn={props.setStartMenuOn}
                  setOpenSubWindow={props.setOpenSubWindow}
                  setOpenProgramsList={props.setOpenProgramsList}
                />
              )}
            </li>
            <hr />
            <li
              onMouseOver={() =>
                setIsSubOn({
                  Detail1: false,
                  Document: false,
                })
              }
            >
              <img
                src={require(`../../src/images/windows-shutdown.png`)}
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
    const [currentOpenProgramList, setCurrentOpenProgramList] = React.useState(
      []
    );
    function changeProgramList() {
      if (props.openSubWindow.wallpaperSetting)
        setCurrentOpenProgramList((prev) => {
          return ["바탕화면 설정"];
        });
      else if (props.openSubWindow.document)
        setCurrentOpenProgramList((prev) => {
          return ["문서"];
        });
      else {
        setCurrentOpenProgramList((prev) => {
          return [];
        });
      }
    }

    React.useEffect(() => {
      changeProgramList();
    }, []);

    // console.log(currentOpenProgramList);

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
        {props.startMenuOn && (
          <StartContent
            setCrtOn={props.setCrtOn}
            crtOn={props.crtOn}
            setStartMenuOn={props.setStartMenuOn}
            setOpenSubWindow={props.setOpenSubWindow}
            setOpenProgramsList={props.setOpenProgramsList}
          />
        )}
        <div
          className="window-body"
          style={{
            padding: "3px",
            margin: 0,
            display: "flex",
            alignItems: "center",
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
              onClick={() => props.setStartMenuOn((prev) => !prev)}
            >
              시작
            </div>
          </button>
          {currentOpenProgramList.map((program) => (
            <div
              key={Date.now()}
              style={{
                width: "180px",
                height: "30px",
                padding: "0 5px",
                marginLeft: "3px",
                marginRight: "1px",
                boxSizing: "border-box",
                background: "gainsboro",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontSize: "15px",
                borderLeft: "2px solid rgba(0,0,0,0.2)",
                borderTop: "2px solid rgba(0,0,0,0.2)",
                borderRight: "2px solid rgba(255,255,255,0.5)",
                borderBottom: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              <img
                src={require(`../../src/images/windows-dir.png`)}
                style={{ width: "18px", marginRight: "5px" }}
              />
              {program}
            </div>
          ))}
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
  const [isIconClicked, setIsIconClicked] = React.useState({
    bin: false,
    memo: false,
  });

  function handleIconClick(event) {
    const { name } = event.target;
    const keys = Object.keys(isIconClicked);
    // console.log(event.target.name);

    setIsIconClicked((prev) => {
      let newArray = {};
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = isIconClicked[key];
        newArray[key] = false;
      }
      return { ...newArray, [name]: true };
      //   return {
      //     ...prev,
      //     [name]: true,
      //   };
    });
  }
  //   console.log(isIconClicked);

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
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
            zIndex: "1",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "50px 0",
          }}
        >
          <div className="icon" onClick={(event) => handleIconClick(event)}>
            <img
              src={
                isIconClicked.bin
                  ? require(`../../src/images/icon-bin_full_selected.png`)
                  : require(`../../src/images/icon-bin_full.png`)
              }
              name="bin"
              style={{
                width: "50px",
                marginBottom: "5px",
              }}
            />
            <span className={isIconClicked.bin ? "iconName_selected" : null}>
              휴지통
            </span>
          </div>
          <div className="icon" onClick={(event) => handleIconClick(event)}>
            <img
              src={
                isIconClicked.memo
                  ? require(`../../src/images/icon-notepad_selected.png`)
                  : require(`../../src/images/icon-notepad.png`)
              }
              name="memo"
              style={{
                width: "50px",
                marginBottom: "5px",
                marginLeft: "-10px",
              }}
            />
            <span className={isIconClicked.memo ? "iconName_selected" : null}>
              메모장
            </span>
          </div>
        </div>
      </div>
      {/* <FirstAlert /> */}
      <StartLine
        startMenuOn={props.startMenuOn}
        setStartMenuOn={props.setStartMenuOn}
        crtOn={props.crtOn}
        setCrtOn={props.setCrtOn}
        openSubWindow={props.openSubWindow}
        setOpenSubWindow={props.setOpenSubWindow}
        openProgramsList={props.openProgramsList}
        setOpenProgramsList={props.setOpenProgramsList}
      />
    </>
  );
}

export default React.memo(MainWindow);
