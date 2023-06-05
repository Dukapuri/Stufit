import {useState, useRef, useEffect} from 'react';
import Header from "../components/header2";
import canvasStyle from "../components/canvasStyles.module.css";

const Screen = () => {

  const colorList = ["#1abc9c","#3498db","#34495e","#27ae60","#8e44ad","#f1c40f","#e74c3c","#95a5a6","#d35400","#bdc3c7","#2ecc71","#e67e22"]
  const CANVAS_WIDTH = 1920
  const CANVAS_HEIGHT = 1080

  const [getCtx, setGetCtx] = useState(null);
  const canvasRef = useRef(null);
  const [painting, setPainting] = useState(false);
  const [getWidth, setWidth] = useState(5);
  const [getColor, setColor] = useState("#000000");
    
  useEffect(()=>{
      /** @type {HTMLCanvasElement} */
      const canvas = canvasRef.current;
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      const ctx = canvas.getContext('2d');
      ctx.lineJoin = "round";
      ctx.lineWidth = getWidth;
      ctx.strokeStyle = "#000000";
      setGetCtx(ctx);
  }, []);

  useEffect(()=>{
      if(getCtx) {
          getCtx.lineWidth = getWidth;
          getCtx.strokeStyle = getColor;
          getCtx.fillStyle = getColor;
      }
  }, [getWidth, getCtx, getColor]);

  const handleWidthChange = (event) => {
      setWidth(event.target.value);
  }

  const handleColorChange = (event) => {
      setColor(event.target.dataset.color);
  }

  const drawFn = e => {
      // mouse position
      const mouseX = e.nativeEvent.offsetX;
      const mouseY = e.nativeEvent.offsetY;
      // drawing
      if (!painting) {
          getCtx.beginPath();
          getCtx.moveTo(mouseX, mouseY);
      } else {
          getCtx.lineTo(mouseX, mouseY);
          getCtx.stroke();
      }
  }
  const clearCanvas = e => {
      getCtx.fillStyle = "white"
      getCtx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  }

  return (
    <div className="Screen">
      <Header />

<<<<<<< HEAD
      {/* 캔버스 */}
      <div className={canvasStyle.body}>
          <canvas 
              className={canvasStyle.canvas}
              ref={canvasRef}
              onMouseDown={() => setPainting(true)}
              onMouseUp={() => setPainting(false)}
              onMouseMove={e => drawFn(e)}
              onMouseLeave={() => setPainting(false)}
              >
          </canvas>
          <input id='line-width' type='range' min="1" max="10" step="0.1" value={getWidth} onChange={handleWidthChange}/>
          <input type="color" value={getColor}/>
              {colorList.map((color)=>{
                  return(
                      <div className={canvasStyle.colorOption} style={{backgroundColor : color}} data-color={color} onClick={handleColorChange}></div>
                  );
              })}
          <button id='destroy-btn' onClick={clearCanvas}>Destroy</button> 
      </div>


=======
>>>>>>> newj2an
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
