import React from 'react';
import "./style.css";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef, useState } from 'react';
import Footer from "./myComponents/Footer";
import {Link} from "react-router-dom";

export default function Ideapad() {
    const [brushSize, setBrushSize] = useState(5);
    const [brushColor, setBrushColor] = useState("#000000");
    const canvasRef = useRef();
    const canvasRef2 = useRef();
    const [buttonPress, setButtonPress] = useState(1);
    const [canvasBgPress, setCanvasBgPress] = useState(3);
    const [canvasColor, setCanvasColor] = useState("#e0e8e7");
    const [brushColorText, setBrushColorText] = useState("#e0e8e7");
    const [canvasColorOptionsBg, setCanvasColorOptionsBg] = useState("#cddedc");
    const [canvasColorText, setCanvasColorText] = useState("#3b615d");
    // const [gridFlag, setGridFlag] = useState(true);
    const el = canvasRef2.current;
    let s=70, l=60;
    let finalBrushColor;
    
  return(
    <>
    <div className='ideapad-main-container'>
        <div className="side-panel-outer-container">
            <div className='project-link'>
                <Link to="/" style={{textDecoration: "none"}}>
                    <h4 className="project-link-text">
                        Projects
                    </h4>
                </Link>
            </div>
            <div className="side-panel">
                <div className="ideapad-heading">
                    <h4 className="ideapad-text">
                        Ideapad
                    </h4>
                    <div className="ideapad-image-container">

                    </div>
                </div>
                <div className="brush-size-container">
                    <h4 className="brush-size-text">Brush size</h4>
                    {/* <input className="brush-size-input" type="range" step={1} min={2} max={50} value={brushSize} onChange={(e)=>{setBrushSize(e.target.value)}}/>    */}
                    <div className="brush-size-circles-container">
                        <button className="brush-size-circle" id={buttonPress == 1 ? "brush-size-circle-1-active" : "brush-size-circle-1"} onClick={()=>{setBrushSize(5); setButtonPress(1)}}></button>
                        <button className="brush-size-circle" id={buttonPress == 2 ? "brush-size-circle-2-active" : "brush-size-circle-2"} onClick={()=>{setBrushSize(10); setButtonPress(2)}}></button>
                        <button className="brush-size-circle" id={buttonPress == 3 ? "brush-size-circle-3-active" : "brush-size-circle-3"} onClick={()=>{setBrushSize(15); setButtonPress(3)}}></button>
                        <button className="brush-size-circle" id={buttonPress == 4 ? "brush-size-circle-4-active" : "brush-size-circle-4"} onClick={()=>{setBrushSize(20); setButtonPress(4)}}></button>
                    </div>
                </div>
                <div className="brush-color-container" style={{backgroundColor: brushColor}}>
                    <h4 className='brush-color-text' style={{color: brushColorText}}>Brush color</h4>
                    <input className="brush-color-input" type="range" step={1} min={0} max={360} 
                        onChange={(e)=>{
                            let h = e.target.value;
                            l /= 100;
                            const a = s * Math.min(l, 1 - l) / 100;
                            const f = n => {
                                const k = (n + h / 30) % 12;
                                const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
                                return Math.round(255 * color).toString(16).padStart(2, '0');   
                            };
                            finalBrushColor = `#${f(0)}${f(8)}${f(4)}`;
                            setBrushColor(finalBrushColor);
                            setBrushColorText("#e0e8e7")
                        }}
                    />
                </div>
                <div className="canvas-options-container" style={{backgroundColor: canvasColorOptionsBg}}>
                    {/* <div className="grid-toggle-option-container">
                        <h4 className="grid-toggle-text">Grid</h4>
                        <label className="switch">
                            <input type="checkbox" onChange={()=>{
                                setGridFlag(gridFlag==false?true:false);
                                console.log(gridFlag);
                            }}/>
                            <span className="slider round"></span>
                        </label>
                    </div> */}
                    <div className="canvas-bg-option-container">
                        <h4 className="canvas-color-text" style={{color: canvasColorText}}>Canvas Color</h4>
                        <div className="canvas-colors-container">
                            <div className="canvas-bg-color-circle" id={canvasBgPress == 1 ? "canvas-bg-color-1-active" : "canvas-bg-color-1"} onClick={()=>{setCanvasColor("#000000"); setBrushColor("#e0e8e7"); setBrushColorText("#587d7a"); setCanvasBgPress(1); setCanvasColorOptionsBg("black"); setCanvasColorText("#e0e8e7")}} ></div>
                            <div className="canvas-bg-color-circle" id={canvasBgPress == 2 ? "canvas-bg-color-2-active" : "canvas-bg-color-2"} onClick={()=>{setCanvasColor("#ffffff"); setBrushColor("#000000"); setBrushColorText("#e0e8e7"); setCanvasBgPress(2); setCanvasColorOptionsBg("white"); setCanvasColorText("#587d7a")}}></div>
                            <div className="canvas-bg-color-circle" id={canvasBgPress == 3 ? "canvas-bg-color-3-active" : "canvas-bg-color-3"} onClick={()=>{setCanvasColor("#e0e8e7"); setBrushColor("#000000"); setBrushColorText("#e0e8e7"); ; setCanvasBgPress(3); setCanvasColorOptionsBg("#e0e8e7"); setCanvasColorText("#587d7a")}}></div>
                            <div className="canvas-bg-color-circle" id={canvasBgPress == 4 ? "canvas-bg-color-4-active" : "canvas-bg-color-4"} onClick={()=>{setCanvasColor("#587d7a"); setBrushColor("#e0e8e7"); setBrushColorText("#587d7a"); setCanvasBgPress(4); setCanvasColorOptionsBg("#587d7a"); setCanvasColorText("#e0e8e7")}}></div>
                        </div>
                    </div>
                </div>

                <div className="canvas-buttons-container">
                    <button 
                        className='canvas-button'
                        id='canvas-clear-button'
                        onClick={()=>{
                            console.log(canvasRef.current);
                            canvasRef.current.clear();
                        }}
                        >
                        Clear
                    </button>
                    <button
                        className='canvas-button'
                        id='canvas-undo-button'
                        onClick={() => {
                        canvasRef.current.undo();
                        }}
                    >
                        Undo
                    </button>
                    <button
                        className='canvas-button'
                        id="canvas-load-button"
                        onClick={() => {
                            localStorage.setItem(
                                "savedDrawing",
                                canvasRef.current.getSaveData()
                            );
                            canvasRef.current.loadSaveData(
                            localStorage.getItem("savedDrawing")
                            );
                        }}
                        >
                        Replay
                    </button>
                    <button
                        className='canvas-button'
                        id="canvas-download-button"
                        onClick={()=>{
                            const element = canvasRef.current;
                            const data = element.canvasContainer.children[1].toDataURL()
                            const link = document.createElement('a');

                            if (typeof link.download === 'string') {
                            link.href = data;
                            link.download = 'image.jpg';

                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            } else {
                            window.open(data);
                            }
                        }}
                        > 
                        Save
                    </button>
                </div>
            </div>

        </div>    

{/* ********************** */}
        <div className="my-canvas" style={{backgroundColor: canvasColor}}>
            <CanvasDraw  id="drawing-board" 
                ref={canvasRef}
                enablePanAndZoom
                style={{width: "100%", height: "100%", borderRadius: "25px", backgroundColor: "transparent"}} 
                hideGrid={false}
                brushRadius={brushSize}
                brushColor={brushColor}
                lazyRadius={8}
                loadTimeOffset={15}
            />
        </div>  
    </div>
    <Footer screen={1}/>
    </>
  );         
}

// Todo:
// 1. create SidePanel;
// 2. think of something to do with the load canvas, alert message or something of that sort

{/* <CanvasDraw
    style={{width: "100%", height: "100%", borderRadius: "25px", backgroundColor: "transparent"}} 
    disabled
    hideGrid
    ref={canvasRef2}
    saveData={localStorage.getItem("savedDrawing")}
    loadTimeOffset={15}
/> */}


// {gridFlag?
//     <div className="my-canvas">
//         <CanvasDraw  id="drawing-board" 
//             ref={canvasRef}
//             enablePanAndZoom
//             style={{width: "100%", height: "100%", borderRadius: "25px", backgroundColor: "transparent"}} 
//             hideGrid={true}
//             brushRadius={brushSize}
//             brushColor={brushColor}
//             lazyRadius={8}
//             loadTimeOffset={15}
//         />
//     </div>  
//     :
//     <div className="my-canvas">
//         <CanvasDraw  id="drawing-board" 
//             ref={canvasRef}
//             enablePanAndZoom
//             style={{width: "100%", height: "100%", borderRadius: "25px", backgroundColor: "transparent"}} 
//             hideGrid={false}
//             brushRadius={brushSize}
//             brushColor={brushColor}
//             lazyRadius={8}
//             loadTimeOffset={15}
//         />
//     </div>  
// }