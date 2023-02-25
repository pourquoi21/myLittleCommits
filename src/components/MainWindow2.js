import React from "react";
import Window from "../images/windows-4.png";
import WindowBar from "../images/windows-bar.png";
import StartDetails1 from "./StartDetails1";
import StartDetails2 from "./StartDetails2";
import StartLineClock from "./StartLineClock";

function MainWindow2({
  onSetStart,
  onSetCrt,
  onSetShut,
  startMenuOn,
  setStartMenuOn,
  crtOn,
  setCrtOn,
  openSubWindow,
  setOpenSubWindow,
  changeWall,
}) {
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
                const keys = Object.keys(props.openSubWindow);
                props.setOpenSubWindow((prev) => {
                  let newObj = {};
                  for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const value = props.openSubWindow[key];
                    if (value === true || value === "active")
                      newObj[key] = true;
                    else newObj[key] = false;
                  }

                  return { ...newObj, 문서: "active" };
                });
              }}
            >
              <img
                src={require(`../../src/images/windows-docs.png`)}
                style={{ width: "35px" }}
              />
              <span>문서(D)</span>
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
                  openSubWindow={props.openSubWindow}
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

        return { ...newObj, [id]: "active" };
      });
    }

    // 열린 프로그램만 시작표시줄에 나타내기
    // 처음 정해진 openSubWindow의 차례에 종속적이지 않게 만들어야하는데..
    // newObj에 넣어주는 key:value값이 openSubWindow로부터 온거라..
    // function openProgramList() {
    //   const keys = Object.keys(props.openSubWindow);

    //   for (let i = 0; i < keys.length; i++) {
    //     let newObj = {};
    //     const key = keys[i];
    //     const value = props.openSubWindow[key];
    //     if (value || value === "active") newObj = { ...newObj, [key]: value };
    //     else newObj = { ...newObj };
    //   }

    //   return newObj;
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
          zIndex: "3",
        }}
        className="window"
      >
        {onSetStart === true && (
          <StartContent
            setCrtOn={props.setCrtOn}
            crtOn={props.crtOn}
            setStartMenuOn={props.setStartMenuOn}
            openSubWindow={props.openSubWindow}
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
          onClick={onSetStart}
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
            >
              시작
            </div>
          </button>

          {/* {Object.entries(openProgramList()).map((program) => (
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
          ))} */}

          <StartLineClock />
        </div>
      </div>
    );
  }

  const [isIconClicked, setIsIconClicked] = React.useState({
    bin: false,
    memo: false,
  });

  function handleIconClick(event) {
    const { name } = event.target;
    const keys = Object.keys(isIconClicked);

    setIsIconClicked((prev) => {
      let newArray = {};
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = isIconClicked[key];
        newArray[key] = false;
      }
      return { ...newArray, [name]: true };
    });
  }

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#008080",
          backgroundImage: `URL(${changeWall})`,
          backgroundSize: "cover",
          padding: "2vh 2vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          // alignItems: "center",
        }}
        onClick={() => setStartMenuOn(false)}
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
                const keys = Object.keys(openSubWindow);
                setOpenSubWindow((prev) => {
                  let newObj = {};
                  for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const value = openSubWindow[key];
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

      <StartLine
        startMenuOn={startMenuOn}
        setStartMenuOn={setStartMenuOn}
        crtOn={crtOn}
        setCrtOn={setCrtOn}
        openSubWindow={openSubWindow}
        setOpenSubWindow={setOpenSubWindow}
      />
    </>
  );
}

export default React.memo(MainWindow2);
