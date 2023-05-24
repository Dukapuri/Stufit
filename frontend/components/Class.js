import styles from './styles.module.css';
import {useState, useRef, useEffect} from 'react';

function Class(params) {
    
    const colorList = ["#1abc9c","#3498db","#34495e","#27ae60","#8e44ad","#f1c40f","#e74c3c","#95a5a6","#d35400","#bdc3c7","#2ecc71","#e67e22"]
    const CANVAS_HEIGHT = 800
    const CANVAS_WIDTH = 800

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
            <input id='line-width' type='range' min="1" max="10" step="0.1" value={getWidth} onChange={handleWidthChange}/>
            <input type="color" value={getColor}/>
                {colorList.map((color)=>{
                    return(
                        <div className={styles.colorOption} style={{backgroundColor : color}} data-color={color} onClick={handleColorChange}></div>
                    );
                })}
            <button id='destroy-btn' onClick={clearCanvas}>Destroy</button> 
        </div>
    );
}

export default Class;