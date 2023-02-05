import React from "react";

function StartDetails1(props) {
  const [isMouseOn, setIsMouseOn] = React.useState({
    Deep1: false,
    Deep2: false,
    Deep3: false,
    Deep4: false,
  });
  function StartDeepDetail4(props) {
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
          <ul className="StartDeepDetail-ul">
            <li id="underCons-li">
              <span className="underConstruction">공사 중...</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  function StartDeepDetail3(props) {
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
                src={require(`../../src/images/windows-ie.png`)}
                style={{ width: "16px", margin: "0 5px 0 3px" }}
              />
              <span>React portfolio</span>
            </li>
            <li>
              <img
                src={require(`../../src/images/windows-ie.png`)}
                style={{ width: "16px", margin: "0 5px 0 3px" }}
              />
              <span>React movieapp</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  function StartDeepDetail2(props) {
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
                src={require(`../../src/images/windows-ie.png`)}
                style={{ width: "16px", margin: "0 5px 0 3px" }}
              />
              <span>Momentum clone website</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  function StartDeepDetail1(props) {
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
          <ul className="StartDeepDetail-ul" onClick={() => props.setOn(false)}>
            <li>
              <img
                src={require(`../../src/images/windows-ie.png`)}
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
            <img
              src={require(`../../src/images/icon-html5.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
            />
            <span>HTML & CSS</span>
            <div className="startDetail-arrow">▶</div>
            {isMouseOn.Deep1 && <StartDeepDetail1 setOn={props.setOn} />}
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
            {isMouseOn.Deep2 && <StartDeepDetail2 setOn={props.setOn} />}
            <img
              src={require(`../../src/images/icon-js.png`)}
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
            {isMouseOn.Deep3 && <StartDeepDetail3 setOn={props.setOn} />}
            <img
              src={require(`../../src/logo.svg`).default}
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
            {isMouseOn.Deep4 && <StartDeepDetail4 setOn={props.setOn} />}
            <img
              src={require(`../../src/images/icon-ts.png`)}
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

export default React.memo(StartDetails1);
