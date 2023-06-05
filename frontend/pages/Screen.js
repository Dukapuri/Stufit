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
              <input type="color" className="colorSelect"/>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .toolBox {
          position: fixed;
          z-index : 999;
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
          display : flex;
          flex-direction : column;
          justify-content : center;
          align-items : center;
          padding : 0 100px 0 0;
          margin : 0;
        }

        .colorRow {
          display: flex;
          justify-content: flex-start;
          margin-bottom : 5px;
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
          box-shadow : 0 1.5px 4px #ccc;
        }

        #cred {
          background-color: red;
          box-shadow : 0 1.5px 4px #ccc;
        }

        #cgreen {
          background-color: green;
          box-shadow : 0 1.5px 4px #ccc;
        }

        #cblue {
          background-color: blue;
          box-shadow : 0 1.5px 4px #ccc;
        }

        #cyellow {
          background-color: yellow;
          box-shadow : 0 1.5px 4px #ccc;
        }

        .colorSelect {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default Screen;
