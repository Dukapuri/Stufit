import React from "react";
import Header from "../components/header2";

const Screen = () => {
  return (
    <div className="Screen">
      <Header />
      
      <div className="ScreenWrapper">
        <div className="toolBox">
          <ul className="workLevel">
            <li><img src="/img/back.png" /></li>
            <li><img src="/img/go.png" /></li>
          </ul>
          <ul className="toolItem">
            <li><img src="/img/pen.svg"/></li>
            <li><img src="/img/highpen.svg"/></li>
            <li><img src="/img/eraser.svg"/></li>
          </ul>
          <div className="ColorContainer">
            <div className="colorRow">
              <div className="colorCell" id="cblack" value="#000000"></div>
              <div className="colorCell" id="cred" value="#ff0000"></div>
              <div className="colorCell" id="cgreen" value="#00ff00"></div>
            </div>
            <div className="colorRow">
              <div className="colorCell" id="cyellow" value="#00ffff"></div>
              <div className="colorCell" id="cblue" value="#0000ff"></div>
              <input type="color"/>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .toolBox {
          position: absolute;
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
          border: 1px solid #d3d3d3;
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

        .workLevel li:hover {
          filter: blur(1px);
        }

        .workLevel li img {
          width: 80%;
          object-fit: auto;
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
        }

        .toolItem li img {
          width: 90%;
          object-fit: auto;
        }

        .ColorContainer {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 10px;
          margin-top: 10px;
        }

        .colorRow {
          display: flex;
          justify-content: flex-start;
        }

        .colorCell {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-left : 5px;
          cursor : pointer;
        }

        #cblack {
          background-color: black;
        }

        #cred {
          background-color: red;
        }

        #cgreen {
          background-color: green;
        }

        #cblue {
          background-color: blue;
        }

        #cyellow {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
}

export default Screen;
