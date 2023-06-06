import React, { useState } from "react";
import Header from "../components/header2";

const Screen = () => {
  const [penGuideVisible, setPenGuideVisible] = useState(false); // 펜 굵기 선택창 visible 유무
  const [selectedColor, setSelectedColor] = useState("#000000"); // 초기 선택된 색깔 : 검정
  const [userListVisible, setUserListVisible] = useState(false); // userList 영역 visible 유무
  const [isSpeaking, setIsSpeaking] = useState(false); // speak 기능 유무

  const handleSpeakClick = () => {    // speak 클릭시 함수 호출
    setIsSpeaking((prevState) => !prevState);
  };

  const handleBack = () => {}; // 작업 뒤로가기 함수(적용 필요)

  const handleGo = () => {}; // 작업 앞으로가기 함수(적용 필요)

  const handleRefresh = () => {}; // 새 도화지 함수 (적용 필요)

  const handlePenOption = () => {
    // 펜 굵기 선택창 나타나고, 닫히는 함수
    setPenGuideVisible((prevState) => !prevState);
  };

  const handlePWidthSelected = () => {
    // 펜 굵기 선택 (적용 필요, 선택과 동시에 펜으로 써지게 적용해야될 것 같아)
    setPenGuideVisible(false);
  };

  const handleHighPen = () => {  // 형광펜 사용 함수(적용 필요)

  };

  const handleErase = () => {  // 지우개 적용 함수(적용 필요)

  };

  const handlePColorSelected = (event) => {
    // 펜 색 지정(적용 필요, setSelectedColor구문 밑에다가 추가하면됨)
    let selectedColor;
    if (event.target.tagName === "INPUT") {
      selectedColor = event.target.value;
    } else {
      selectedColor = event.target.getAttribute("value");
    }
    setSelectedColor(selectedColor);
  };

  const handleUserImageClick = () => {
    // userList 보여주는 토글 이미지 함수
    setUserListVisible((prevState) => !prevState);
  };

  return (
    <div className="Screen">
      <Header />
      <div className="userInfo" onClick={handleUserImageClick}>
        <img src="/img/item4.png" alt="userIcon" />
      </div>
      {userListVisible && (
        <div className="userList">
          <p>UserList</p>
          <div className="userCard">
            <img src="/img/user.png" alt="userIcon" id="userIcon" />
            <p>user1</p>
            <img
              src={isSpeaking ? "/img/speakon.png" : "/img/speakoff.png"}
              alt="speak"
              id="userSpeak"
              onClick={handleSpeakClick}
            />
          </div>
          <div className="userCard">
            <img src="/img/user.png" alt="userIcon" id="userIcon" />
            <p>user2</p>
            <img
              src={isSpeaking ? "/img/speakon.png" : "/img/speakoff.png"}
              alt="speak"
              id="userSpeak"
              onClick={handleSpeakClick}
            />
          </div>
        </div>
      )}
      {penGuideVisible && (
        <div
          className="PenGuide"
          style={{ position: "absolute", left: "37%", bottom: "25%" }}
        >
          <ul>
            <li onClick={handlePWidthSelected}>
              <img src="/img/penwidth1.png" />
            </li>
            <li onClick={handlePWidthSelected}>
              <img src="/img/penwidth2.png" />
            </li>
            <li onClick={handlePWidthSelected}>
              <img src="/img/penwidth3.png" />
            </li>
          </ul>
        </div>
      )}
      <div className="ScreenWrapper">
        <div className="toolBox">
          <ul className="workLevel">
            <li>
              <img src="/img/back.png" onClick={handleBack} />
            </li>
            <li>
              <img src="/img/go.png" onClick={handleGo} />
            </li>
            <li className="refresh">
              <img src="/img/cycle.png" onClick={handleRefresh} />
            </li>
          </ul>
          <ul className="toolItem">
            <li>
              <div className="penOption" onClick={handlePenOption}>
                <div
                  className="currentCircle"
                  style={{ background: selectedColor }}
                ></div>
                <img src="/img/pen.svg" style={{ fill: selectedColor }} />
              </div>
            </li>
            <li>
              <img src="/img/highpen.svg" onClick={handleHighPen}/>
            </li>
            <li>
              <img src="/img/eraser.svg" onClick={handleErase}/>
            </li>
          </ul>
          <div className="ColorContainer">
            <div className="colorRow">
              <div
                className="colorCell"
                id="cblack"
                value="rgb(0,0,0)"
                onClick={handlePColorSelected}
              ></div>
              <div
                className="colorCell"
                id="cred"
                value="rgb(255,0,0)"
                onClick={handlePColorSelected}
              ></div>
              <div
                className="colorCell"
                id="cgreen"
                value="rgb(0,255,0)"
                onClick={handlePColorSelected}
              ></div>
            </div>
            <div className="colorRow">
              <div
                className="colorCell"
                id="cyellow"
                value="rgb(255,255,0)"
                onClick={handlePColorSelected} // 노랑
              ></div>
              <div
                className="colorCell"
                id="cblue"
                value="rgb(0,0,255)"
                onClick={handlePColorSelected} // 파랑
              ></div>
              <input
                type="color"
                className="colorSelect"
                onChange={(event) =>
                  handlePColorSelected({ target: event.target }) // 컬러 선택 input
                }
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Screen {
          position: relative;
        }

        .userInfo {
          position: fixed;
          z-index: 999;
          top: 30px;
          right: 30px;
          width: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }

        .userInfo img {
          width: 100%;
          object-fit: auto;
        }

        .userInfo img:hover {
          animation: jellyAnimation 0.5s;
        }

        .userList {
          position: fixed;
          z-index: 998;
          top: 20%;
          right: 0;
          width: 20%;
          height: 60vh;
          background: #00ff66;
          opacity: 0.6;
          transition: right 0.3s;
          overflow: hidden;
          border-radius : 30px 0 0 30px;
          display : flex;
          justify-content : center;
          align-items : center;
          flex-direction : column;
          box-shadow : 0 2px 6px #d3d3d3;
        }

        .userList p {
          opacity : 1;
          font-size : 1.5rem;
          color : black;
        }

        .userCard {
          width : 80%;
          height : 50px;
          display : flex;
          justify-content : space-evenly;
          align-items : center;
          margin : 0;
          padding : 10px;
        }

        #userSpeak {
          cursor : pointer;
        }

        .Screen:hover .userList {
          right: 0;
        }

        .penOption {
          position: relative;
        }

        .currentCircle {
          position: absolute;
          top: 0;
          left: 0;
          background: #000;
          width: 15px;
          height: 15px;
          border-radius: 50%;
        }

        .toolBox {
          position: fixed;
          z-index: 999;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 100px;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border: none;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 80px;
        }

        .workLevel {
          list-style-type: none;
          display: flex;
          justify-content: space-evenly;
        }

        .workLevel li {
          width: 40px;
          height: 40px;
          background: #d3d3d3;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
        }

        .workLevel li img {
          width: 80%;
          object-fit: auto;
        }

        .refresh {
          margin-left: 40px;
        }

        .toolItem {
          list-style-type: none;
          display: flex;
          justify-content: space-evenly;
        }

        .toolItem li {
          width: 100px;
          height: 200px;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s, width 0.3s, height 0.3s;
        }

        .toolItem li:hover {
          transform: translateY(-50px);
          width: 150px;
          height: 250px;
        }

        .toolItem li:focus {
          transform: translateY(-50px);
          width: 150px;
          height: 250px;
        }

        .toolItem li img {
          width: 90%;
          object-fit: auto;
        }

        .ColorContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 100px 0 0;
          margin: 0;
        }

        .colorRow {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 5px;
        }

        .colorCell {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-left: 5px;
          cursor: pointer;
        }

        #cblack {
          background-color: #000;
          box-shadow: 0 1.5px 4px #ccc;
        }

        #cred {
          background-color: #ff0000;
          box-shadow: 0 1.5px 4px #ccc;
        }

        #cgreen {
          background-color: #00ff00;
          box-shadow: 0 1.5px 4px #ccc;
        }

        #cblue {
          background-color: #0000ff;
          box-shadow: 0 1.5px 4px #ccc;
        }

        #cyellow {
          background-color: #ffff00;
          box-shadow: 0 1.5px 4px #ccc;
        }

        .colorSelect {
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 10px;
          background: transparent;
          cursor: pointer;
          margin-left: 2px;
        }

        .PenGuide {
          width: 200px;
          height: 100px;
          margin: 0;
          padding: 10px;
          background: beige;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .PenGuide ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .PenGuide li {
          width: 50px;
          height: 50px;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }

        .PenGuide li img {
          width: 100%;
          object-fit: auto;
        }

        @keyframes jellyAnimation {
          0%,
          100% {
            transform: scale(1, 1);
          }
          25% {
            transform: scale(0.9, 1.1);
          }
          50% {
            transform: scale(1.1, 0.9);
          }
          75% {
            transform: scale(0.95, 1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Screen;
