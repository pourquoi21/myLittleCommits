import React from "react";
import Window from "../images/windows-4.png";
import WindowBar from "../images/windows-bar.png";
import StartDetails1 from "./StartDetails1";
import StartDetails2 from "./StartDetails2";
import StartLineClock from "./StartLineClock";

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
                <StartDetails1 setOnAndOff={props.setOnAndOff} />
              )}
            </li>
            <li
              id="문서"
              style={{ cursor: "pointer" }}
              onMouseOver={() =>
                setIsSubOn({
                  Detail1: false,
                  Detail2: false,
                })
              }
              onClick={(event) => {
                props.isProgClicked(event);
                props.setOnAndOff((prev) => {
                  return { ...prev, startMenu: !prev.startMenu };
                });
              }}
            >
              <img
                src={require(`../../src/images/windows-docs.png`)}
                style={{ width: "35px" }}
                onClick={(event) => event.stopPropagation()}
              />
              <span onClick={(event) => event.stopPropagation()}>문서(D)</span>
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
                  onAndOff={props.onAndOff}
                  setOnAndOff={props.setOnAndOff}
                  openSubWindow={props.openSubWindow}
                  setOpenSubWindow={props.setOpenSubWindow}
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
              onClick={() => {
                props.setOnAndOff((prev) => {
                  return { ...prev, shutDown: true, startMenu: false };
                });
              }}
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
    // 시작표시줄의 프로그램이 클릭됐을 때, 그 타겟의 id값을 구해
    // openSubWindow props에 active로 표시해주기
    // active된 프로그램은 active라는 className을 얻어 상위로 올라옴
    function isProgClicked(event) {
      const { id } = event.target;
      const keys = Object.keys(props.openSubWindow);
      props.setOpenSubWindow((prev) => {
        let newObj = {};
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = props.openSubWindow[key];
          if (value || value === "active") newObj[key] = true;
          else newObj[key] = false;
        }
        // console.log(newObj);
        // console.log(currentOpenProgramObj);
        return { ...newObj, [id]: "active" };
      });
      // console.log(event.target.id);
    }
    // console.log(props.currentOpenProgramObj);

    // 열린 프로그램만 시작표시줄에 나타내기
    // 처음 정해진 openSubWindow의 차례에 종속적이지 않게 만들어야하는데..
    // newObj에 넣어주는 key:value값이 openSubWindow로부터 온거라..
    function openProgramList() {
      const keys = Object.keys(props.openSubWindow);
      let newObj = {};

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = props.openSubWindow[key];
        // console.log("when we are mapping this", newObj);
        if (value || value === "active") newObj = { ...newObj, [key]: value };
        else newObj = { ...newObj };
      }
      // console.log(newObj);
      return newObj;
    }

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
          zIndex: "3",
        }}
        className="window"
        // onMouseLeave={onMouseLeave}
      >
        {props.onAndOff.startMenu && (
          <StartContent
            onAndOff={props.onAndOff}
            setOnAndOff={props.setOnAndOff}
            openSubWindow={props.openSubWindow}
            setOpenSubWindow={props.setOpenSubWindow}
            isProgClicked={isProgClicked}
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
              onClick={() => {
                props.setOnAndOff((prev) => {
                  return { ...prev, startMenu: !prev.startMenu };
                });
              }}
            >
              시작
            </div>
          </button>
          {/* {currentOpenProgramList.map((program, index) => (
            <div
              onClick={(event) => isProgClicked(event)}
              id={program}
              className="startLineList"
              key={index}
              style={{
                width: "180px",
                height: "32px",
                padding: "0 5px",
                marginLeft: "1.5px",
                marginRight: "1.5px",
                boxSizing: "border-box",
                background: "#c4c4c4",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontSize: "15px",
                borderLeft: "2px solid rgba(255,255,255,0.8)",
                borderTop: "2px solid rgba(255,255,255,0.8)",
                borderRight: "2px solid rgba(0,0,0,0.5)",
                borderBottom: "2px solid rgba(0,0,0,0.5)",
              }}
            > */}
          {Object.entries(openProgramList()).map((program) => (
            <div
              onClick={(event) => isProgClicked(event)}
              id={program[0]}
              className={`startLineList ${
                program[1] == "active" ? "active" : null
              }`}
              key={program[0]}
              style={{
                width: "180px",
                height: "32px",
                padding: "0 5px",
                marginLeft: "1.5px",
                marginRight: "1.5px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
              }}
            >
              <img
                src={require(`../../src/images/windows-dir.png`)}
                style={{ width: "18px", marginRight: "5px" }}
              />
              {program[0]}
            </div>
          ))}

          <StartLineClock />
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
        onClick={() => {
          props.setOnAndOff((prev) => {
            return {
              ...prev,
              startMenu: false,
            };
          });
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
              onDoubleClick={() => {
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
            />
            <span className={isIconClicked.memo ? "iconName_selected" : null}>
              메모장
            </span>
          </div>
        </div>
      </div>
      {/* <FirstAlert /> */}
      <StartLine
        onAndOff={props.onAndOff}
        setOnAndOff={props.setOnAndOff}
        openSubWindow={props.openSubWindow}
        setOpenSubWindow={props.setOpenSubWindow}
      />
    </>
  );
}

export default React.memo(MainWindow);
