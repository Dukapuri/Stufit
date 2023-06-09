import styles from './styles.module.css';
import {useState, useRef, useEffect} from 'react';
function Class(params) {
    
    const colorList = ["#1abc9c","#3498db","#34495e","#27ae60","#8e44ad","#f1c40f","#e74c3c","#95a5a6","#d35400","#bdc3c7","#2ecc71","#e67e22"]
    const CANVAS_HEIGHT = 800
    const CANVAS_WIDTH = 800
    const [getCtx, setGetCtx] = useState(null);
    const canvasRef = useRef(null);
    const [getWidth, setWidth] = useState(5);
    const [painting, setPainting] = useState(false);
    const [getColor, setColor] = useState("#000000");
    
    useEffect(()=>{
    }, []);
        const canvas = canvasRef.current;
        /** @type {HTMLCanvasElement} */
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = getWidth;
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx);

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
        <div className={styles.body}>
            <canvas 
                className={styles.canvas}
                ref={canvasRef}
                onMouseDown={() => setPainting(true)}
                onMouseUp={() => setPainting(false)}
                onMouseMove={e => drawFn(e)}
                onMouseLeave={() => setPainting(false)}
                >
            </canvas>
            <div className={styles.sizeBox}><span>선 두께</span><input id='line-width' type='range' min="1" max="10" step="0.1" value={getWidth} onChange={handleWidthChange}/></div>
            <div className={styles.sizeBox}><span>현재 색깔</span> <input type="color" value={getColor}/></div>
            <div className={styles.container}>
                {colorList.map((color)=>{
                    return(
                        <div className={styles.colorOption} style={{backgroundColor : color}} data-color={color} onClick={handleColorChange}></div>
                })}
                    );
            </div>
            <div className={styles.sizeBox}>
            <button id='destroy-btn' className={styles.sizeBox} onClick={clearCanvas}>새 도화지</button> 
            <button id='eraser-btn' className={styles.sizeBox} onClick={eraserCanvas}>지우개</button>
            </div>
        </div>
    );
}

export default Class;