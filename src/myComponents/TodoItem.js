import React from 'react'
import "../style.css";
import { useEffect, useRef, useState } from 'react';
// import Overlay from 'react-overlays/Overlay'
// import OverlayTrigger from "react-overlay-trigger";
// import ReactTooltip from 'react-tooltip';


export default function TodoItem({todo, onDelete, addProgress, edit}) {
    const todoRef = useRef();  
    const [editFlag, setEditFlag] = useState(false);
    const [saveFlag, setSaveFlag] = useState(false);
    const [tempTitle, setTempTitle] = useState(todo.title);
    const [tempDesc, setTempDesc] = useState(todo.desc);

    return (
        <div className="todos-container" ref={todoRef}> 
            <div className="todos-container-top-section">
                {editFlag?<input style={{display:"inline", marginRight: "5px", color: "#color: #3b615d", borderBottom: "1px solid #3b615d"}} type="text" className="form-input" id='edit-title-input' defaultValue={todo.title} onChange={(e)=>{setTempTitle(e.target.value)}}/>:<h5 className="text-left my-2" id='todo-title' onClick={()=>{setEditFlag(true); setSaveFlag(false)}}>{todo.title}</h5>}
                <div className="todo-check-buttons-container">
                    <button className="todo-check-button" id='progress-check' onClick={()=>{addProgress(todo)}} data-toggle="tooltip" data-placement="bottom" title="In Progress" data-delay='{"show":"0", "hide":"0"}' >
                    </button>
                    
                    <button className="todo-check-button" id='completed-check' onClick={()=>{
                        onDelete(todo)}} data-toggle="tooltip" data-placement="bottom" title="Completed" data-delay='{"show":"0", "hide":"0"}'>
                        </button>
                </div>  
            </div>
            <div className="todos-container-bottom-section">
                {editFlag?<textarea style={{color: "#50404e", backgroundColor: "#eeece6"}} className="form-input todo-description" id='desc-textarea' defaultValue={todo.desc} onChange={(e)=>{setTempDesc(e.target.value)}}></textarea>:<p id="todo-desc" style={{color:"#50404e"}} onClick={()=>{setEditFlag(true); setSaveFlag(false)}}>{todo.desc}</p>}
            </div>
            {editFlag?<button className='edit-save-button' onClick={()=>{setSaveFlag(true); setEditFlag(false); edit(todo, tempTitle, tempDesc);}}>Save</button>:""}
        </div>   
    )
}

{/* <button className='edit-save-button' onClick={()=>{setEditFlag(true); setSaveFlag(false)}}>edit</button> */}