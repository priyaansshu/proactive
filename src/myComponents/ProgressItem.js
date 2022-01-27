import React from 'react';
import "../style.css";
import { useEffect, useRef, useState } from 'react';

export default function ProgressItem({todo, deleteProgress, editProgress}) {
    const [editFlag, setEditFlag] = useState(false);
    const [saveFlag, setSaveFlag] = useState(false);
    const [tempTitle, setTempTitle] = useState(todo.title);
    const [tempDesc, setTempDesc] = useState(todo.desc);
    return (
        <div className="todos-container" id='progress-todos-container'> 
            <div className="todos-container-top-section">
            {editFlag?<input style={{display:"inline", marginRight: "5px", color: "#color: #3b615d", borderBottom: "1px solid #3b615d"}} type="text" className="form-input" id='edit-title-input' defaultValue={todo.title} onChange={(e)=>{setTempTitle(e.target.value)}}/>:<h5 className="text-left my-2" id='todo-title' onClick={()=>{setEditFlag(true); setSaveFlag(false)}}>{todo.title}</h5>}
                <button className='todo-check-button' id='progressContainer-check-button' onClick={()=>{
                    deleteProgress(todo)}}  data-toggle="tooltip" data-placement="bottom" title="Completed" data-delay='{"show":"0", "hide":"0"}'/>
            </div>
            <div className="todos-container-bottom-section">
                {editFlag?<textarea style={{color: "#50404e", backgroundColor: "#eeece6"}} className="form-input todo-description" id='desc-textarea' defaultValue={todo.desc} onChange={(e)=>{setTempDesc(e.target.value)}}></textarea>:<p id="todo-desc" style={{color:"#50404e"}} onClick={()=>{setEditFlag(true); setSaveFlag(false)}}>{todo.desc}</p>}
            </div>
            {editFlag?<button className='edit-save-button' onClick={()=>{setSaveFlag(true); setEditFlag(false); editProgress(todo, tempTitle, tempDesc);}}>Save</button>:""}
        </div>    
    )
}



// style={todo.desc===""?{display: "none"}:{display: "flex"}}