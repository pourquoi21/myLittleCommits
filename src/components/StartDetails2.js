import React from "react";

function StartDetails2(props) {
  // console.log(props.crtOn);

  // function StartDeepDetail2() {
  //   return (
  //     <div
  //       style={{
  //         position: "absolute",
  //         left: "140px",
  //         width: "200px",
  //         boxSizing: "border-box",
  //         cursor: "pointer",
  //       }}
  //       className="window"
  //     >
  //       <div
  //         className="window-body"
  //         style={{
  //           padding: "1px 2px",
  //           margin: 0,
  //           display: "flex",
  //           alignItems: "center",
  //           fontFamily: "Noto Sans KR",
  //           fontWeight: 300,
  //         }}
  //       >
  //         <ul className="StartDeepDetail-ul">
  //           <li>
  //             <img
  //               src={require(`../../src/images/windows-ie.png`)}
  //               style={{ width: "16px", margin: "0 5px 0 3px" }}
  //             />
  //             <span>Momentum clone website</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  // function StartDeepDetail1() {
  //   return (
  //     <div
  //       style={{
  //         position: "absolute",
  //         left: "140px",
  //         width: "180px",
  //         boxSizing: "border-box",
  //         cursor: "pointer",
  //       }}
  //       className="window"
  //     >
  //       <div
  //         className="window-body"
  //         style={{
  //           padding: "1px 2px",
  //           margin: 0,
  //           display: "flex",
  //           alignItems: "center",
  //           fontFamily: "Noto Sans KR",
  //           fontWeight: 300,
  //         }}
  //       >
  //         <ul className="StartDeepDetail-ul">
  //           <li>
  //             <img
  //               src={require(`../../src/images/windows-ie.png`)}
  //               style={{ width: "16px", margin: "0 5px 0 3px" }}
  //             />
  //             <span>HTML&CSS Portfolio</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
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
        <ul className="StartDetails-ul" onClick={() => props.setOn(false)}>
          <li onClick={() => props.setOpenSetting(true)}>
            {/* {isMouseOn.Deep1 && <StartDeepDetail1 />} */}
            <img
              src={require(`../../src/images/windows-wall.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
            />
            <span>바탕화면 설정</span>
            {/* <div className="startDetail-arrow">▶</div> */}
          </li>
          <li onClick={() => props.setCrtOn((prev) => !prev)}>
            {/* {isMouseOn.Deep2 && <StartDeepDetail2 />} */}
            <img
              src={require(`../../src/images/windows-monitor.png`)}
              style={{ width: "16px", margin: "0 5px 0 3px" }}
            />
            <span>CRT효과 {props.crtOn ? "끄기" : "켜기"}...</span>
            {/* <div className="startDetail-arrow">▶</div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default React.memo(StartDetails2);
