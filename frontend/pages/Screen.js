import {useState, useRef, useEffect} from 'react';
import Header from "../components/header2";
import canvasStyle from "../components/canvasStyles.module.css";

const Screen = () => {
  
  const [canvasHistory, setCanvasHistory] = useState([]);
  const [currentCanvasState, setCurrentCanvasState] = useState(null);
  const [redoStack, setRedoStack] = useState([]); // 앞으로 돌아가는 상태를 기록하는 스택


  const colorList = ["#1abc9c", "#3498db", "#34495e", "#27ae60", "#8e44ad", "#f1c40f", "#e74c3c", "#95a5a6", "#d35400", "#bdc3c7", "#2ecc71", "#e67e22"];
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 800;

  const [getCtx, setGetCtx] = useState(null);
  const canvasRef = useRef(null);
  const [painting, setPainting] = useState(false);
  const [getWidth, setWidth] = useState(5);
  const [getColor, setColor] = useState("#000000");


  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext('2d');
    ctx.lineJoin = "round";
    ctx.lineWidth = getWidth;
    ctx.strokeStyle = "#000000";
    setGetCtx(ctx);
    setCurrentCanvasState(canvas.toDataURL());
  }, []);

  useEffect(() => {
    if (getCtx) {
      getCtx.lineWidth = getWidth;
      getCtx.strokeStyle = getColor;
      getCtx.fillStyle = getColor;
    }
  }, [getWidth, getCtx, getColor]);

  const handleUndo = () => {
    if (canvasHistory.length > 0) {
      const previousStates = canvasHistory.slice(0, -1);
      const previousState = previousStates[previousStates.length - 1].state;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = previousState;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        setCurrentCanvasState(previousState);
        setCanvasHistory(previousStates);
        setRedoStack((prevStack) => [...prevStack, { state: previousState }]);
      };
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[redoStack.length - 1].state;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = nextState;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        setCurrentCanvasState(nextState);
        setCanvasHistory((prevHistory) => [...prevHistory, { state: nextState }]);
        setRedoStack((prevStack) => prevStack.slice(0, -1));
      };
    }
  };


  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleColorChangeInput = (event) => {
    setColor(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.dataset.color);
  };

  const onHighLight = () => {
    setColor("#FFFF0005");
  };

  const drawFn = (e) => {
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
  };

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    const currentState = canvas.toDataURL();
    setCurrentCanvasState(currentState);
    setCanvasHistory((prevHistory) => [...prevHistory, { state: currentState }]);

    setRedoStack([]);
  };

  const handleMouseUp = () => {
    setPainting(false);
    saveCanvasState();
  }

const onEraserClick = () => {
  setColor("#ffffff");
};

const clearCanvas = () => {
  getCtx.fillStyle = "white";
  getCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const handlePaste = (event) => {
  const items = event.clipboardData.items;
  for (const item of items) {
    if (item.type.indexOf("image") !== -1) {
      const file = item.getAsFile();
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");

          const aspectRatio = img.width / img.height;
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.width / aspectRatio;

          ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        };
      };
      reader.readAsDataURL(file);
    }
  }
};
  
  return (
    <div className="Screen">
      <Header />
      {/* 캔버스 */}
      <div className={canvasStyle.body} onPaste={handlePaste}>
        <canvas
          className={canvasStyle.canvas}
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => setPainting(false)}
        />
        <input
          id="line-width"
          type="range"
          min="1"
          max="10"
          step="0.1"
          value={getWidth}
          onChange={handleWidthChange}
        />
        <input
          type="color"
          value={getColor}
          onChange={handleColorChangeInput}
        />
        <div>
          {colorList.map((color) => {
            return (
              <div
                className={canvasStyle.colorOption}
                style={{ backgroundColor: color }}
                data-color={color}
                onClick={handleColorChange}
                key={color}
              ></div>
            );
          })}
        </div>
        <button id="clear-canv-btn" onClick={clearCanvas}>
          새 도화지
        </button>
        <button id='highlight-btn' onClick={onHighLight}>
          형관펜
        </button>
        <button id="eraser-btn" onClick={onEraserClick}>
          지우개
        </button>
        <button onClick={handleUndo}>되돌아가기</button>
        <button onClick={handleRedo}>앞으로 돌리기</button>
      </div>

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
