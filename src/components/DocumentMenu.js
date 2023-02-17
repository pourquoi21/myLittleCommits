import React from "react";
import Draggable from "react-draggable";

export default function DocumentMenu(props) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <Draggable onDrag={(e, data) => trackPos(data)} handle="strong">
      <div
        id={
          props.openSubWindow.문서 === "active"
            ? "program_active"
            : "program_div"
        }
        className="window"
        style={{
          position: "absolute",
          margin: "0 auto",
          width: "900px",
          height: "750px",
          boxSizing: "border-box",
        }}
        onClick={() => {
          const keys = Object.keys(props.openSubWindow);
          props.setOpenSubWindow((prev) => {
            let newObj = {};
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value = props.openSubWindow[key];
              if (value === true || value === "active") newObj[key] = true;
              else newObj[key] = false;
            }
            // wallpaperSetting: false,
            return { ...newObj, 문서: "active" };
          });
          props.setStartMenuOn(false);
        }}
      >
        <strong className="cursor">
          <div className="title-bar" style={{ height: "14px" }}>
            <div className="title-bar-text">About Jay...</div>
            <div className="title-bar-controls">
              <button aria-label="Help" />
              <button
                aria-label="Close"
                onClick={(event) => {
                  event.stopPropagation();
                  props.setOpenSubWindow((prev) => ({
                    ...prev,
                    문서: false,
                  }));
                  // props.setOpenProgramsList((prev) => {
                  //   let newList = [];
                  //   for (let i = 0; i < prev.length; i++) {
                  //     if (prev[i] === "바탕화면 설정") newList.push();
                  //     else newList.push(prev[i]);
                  //   }
                  //   return newList;
                  // });
                }}
              />
            </div>
          </div>
        </strong>
        <div
          className="window-body documentMenu"
          style={{
            height: "722px",
            padding: "1px 2px",
            margin: 0,
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Noto Sans KR",
            fontWeight: 300,
          }}
        >
          <ul
            className="document_menu"
            style={{ display: "flex", height: "24px" }}
          >
            <li>파일(F)</li>
            <li>보기(V)</li>
            <li>도움말(H)</li>
          </ul>
          <hr />
          <span
            className="document_select"
            style={{ height: "24px", display: "flex", alignItems: "center" }}
          >
            <p>주소(D)</p>
            <select>
              <option style={{ fontFamily: "Noto Sans KR" }}>
                https://github.com/pourquoi21
              </option>
            </select>
          </span>
          <div
            className="document_content"
            style={{
              padding: "20px",
              boxSizing: "border-box",
              background: "#fff",
              borderTop: "2px solid gray",
              borderLeft: "2px solid gray",
              borderBottom: "1px solid #fff",
              borderRight: "1px solid #fff",
              boxShadow: "-1px -1px inset lightgray",
              overflowY: "scroll",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "10px" }}>🙋‍♀️전주민</h3>
              <hr id="normal_hr" />
              <p>
                새로운 것을 배우고 학습하는 것을 좋아하여 영어영문학과 졸업 후
                디자인 직종에서 일했습니다.
                <br />
                웹 컨텐츠 디자인을 하면서 자연히 웹 페이지 제작에도 관심을 갖게
                되었습니다.
                <br />
                현재는 정보처리기사 자격증 취득을 위한 공부를 병행하고 있으며,
                <br />
                Notion에 배운 것을 기록하거나, GitHub에 1일 1커밋을 하려
                노력합니다.
                <br />
              </p>
              <p>
                사용성이 좋고 직관적인 웹을 만들고자 합니다.
                <br />
                주로 React를 통해 개발을 하고 있으나, TypeScript 외 여타
                언어에도 관심이 있습니다.
              </p>
            </div>
            <div className="document_projects">
              <h3 style={{ marginBottom: "10px" }}>
                💻프로젝트 <span>[시작 ▶ 프로그램]에서 보실 수 있습니다.</span>
              </h3>
              <hr id="normal_hr" />
              <h4>🎈HTML & CSS Portfolio</h4>
              <p>
                처음 만든 웹 페이지가 포함되어 있는 포트폴리오로,
                <br /> 처음에 Jquery로 구현했던 애니메이션을 JavaScript로
                수정했습니다.
                <br />
                기본적인 CSS와 JavaScript에 익숙해질 수 있었습니다.
              </p>
              <h4>📃Momentum Clone Webpage</h4>
              <p>
                JavaScript를 통해 Momentum 클론 페이지를 제작했습니다.
                <br />
                날씨 API를 가져오고, Date()함수를 통해 시계를 제작하고,
                <br />
                LocalStorage에 내용을 저장하여 To-do 리스트를 만드는 것을
                익혔습니다.
              </p>
              <h4>🎬React Movie App</h4>
              <p>
                React로 처음 제작한 앱입니다.
                <br />
                API와 .map()을 통해서 모든 데이터를 하드코딩하지 않고도 앱을
                만들 수 있는 React의 기능을 경험했으며,
                <br />
                LocalStorage에 내용을 저장하여 To-do 리스트를 만드는 것을
                익혔습니다.
                <br />이 프로젝트를 통해 JavaScript를 HTML처럼 사용할 수 있는
                React에 대해 처음 관심을 갖게 되었습니다.
              </p>
              <h4>🥗React Portfolio</h4>
              <p>
                3개의 토이 프로젝트를 포함한 React 포트폴리오입니다.
                <br />
                useState와 useEffect를 익히며 만든 밈 생성기,
                <br />
                LocalStorage와 날씨 API를 이용해 만든 일기 앱,
                <br />
                Tasty API를 통해 제작한 레시피 추천 앱이 있습니다.
                <br />
                특히 레시피 추천 앱은 개인적으로 API를 골라 제작한 앱으로, 이
                앱을 제작하면서 메인 페이지에서 각각의 토이프로젝트로 이동할
                때마다 state를 넘겨주는 것에 더 깊은 이해를 얻고, 익숙해질 수
                있는 계기가 되었습니다.
              </p>
              <h4>
                📁Windows 98 Project <span>(Where now we are)</span>
              </h4>
              <p>
                Windows 98을 경험해 본 사람으로서 이를 오마쥬하는 감각으로,
                비슷한 느낌의 페이지를 만들고 싶었습니다.
                <br />
                순수하게 취향을 반영하여 만들기 시작했으나, 만들면서 프로그램을
                만드는 데에는 많은 고려사항이 필요하다는 것도 함께 깨달았습니다.
                <br />
                특히 변수의 이름을 신경써서 지어야 한다는 것을 앱을 제작하는
                중간에 일일이 수정하면서 뼈저리게 알 수 있었고,
                <br />
                프로젝트에 임하기 전에 어떤 기능이 필요할지를 계획하는 단계가
                필요하겠다는 것을 이론적으로뿐 아니라 피부로 깨달을 수
                있었습니다.
                <br />
                개인 앱을 만들면서 좋은 점은 잘못된 코드가 자칫 일으킬 수 있는
                문제를 스스로 해결할 기회를 얻는 것임을 느끼고 있습니다.
                <br />
                아직 구현하지 못한 아쉬운 점이 많지만, 차차 수정해나갈
                계획입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
