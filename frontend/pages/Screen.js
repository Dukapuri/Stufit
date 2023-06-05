import React, { useState } from "react";
import Header from "../components/header2";

const Screen = () => {
  const [penGuideVisible, setPenGuideVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000"); // Initial value is black

  const handleBack = () => {};

  const handleGo = () => {};

  const handleRefresh = () => {};

  const handlePenOption = () => {
    if (penGuideVisible) {
      setPenGuideVisible(false);
    } else {
      setPenGuideVisible(true);
    }
  };

  const handlePWidthSelected = () => {
    setPenGuideVisible(false);
  };

  const handlePColorSelected = (event) => {
    let selectedColor;
    if (event.target.tagName === "INPUT") {
      selectedColor = event.target.value;
    } else {
      selectedColor = event.target.getAttribute("value");
    }
    setSelectedColor(selectedColor);
  };

  return (
    <div className="Screen">
      <Header />
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
                <div className="currentCircle" style={{ background: selectedColor }}></div>
                <img src="/img/pen.svg" style={{ fill: selectedColor }} />
              </div>
            </li>
            <li>
              <img src="/img/highpen.svg" />
            </li>
            <li>
              <img src="/img/eraser.svg" />
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
                onClick={handlePColorSelected}
              ></div>
              <div
                className="colorCell"
                id="cblue"
                value="rgb(0,0,255)"
                onClick={handlePColorSelected}
              ></div>
              <input
                type="color"
                className="colorSelect"
                onChange={(event) =>
                  handlePColorSelected({ target: event.target })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .penOption {
          position : relative;
        }

        .currentCircle {
          position : aboslute;
          top : 0;
          right : 0;
          background : #000;
          width : 15px;
          height : 15px;
          border-radius : 50%;
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

        .PenGuide ul li {
          flex: 1;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s, width 0.3s, height 0.3s;
        }

        .PenGuide ul li:hover {
          transform: scale(1.3);
        }

        .PenGuide ul li img {
          max-width: 100%;
          max-height: 100%;
          cursor: pointer;
        }

        .colorGuide {
          position: absolute;
          top: -7px;
          right: -7px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: red;
        }
      `}</style>
    </div>
  );
}

export default Screen;
