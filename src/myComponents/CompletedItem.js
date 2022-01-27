import React from 'react';
import "../style.css";

export default function CompletedItem({todo, remove}) {
    return (
        <div className="todos-container" id='completed-todos-container'> 
            <div className="todos-container-top-section">
                <h5 style={{minWidth:"80%"}} className="text-left my-2" id='todo-title' > {todo.title}</h5>
                <button className="todo-check-button" id='remove-button' onClick={()=>{
                    remove(todo)}}  data-toggle="tooltip" data-placement="bottom" title="Remove" data-delay='{"show":"0", "hide":"0"}'>
                </button>
            </div>    
            <div className="todos-container-bottom-section" style={todo.desc===""?{display: "none"}:{display: "flex"}}>
                <p id="todo-desc">{todo.desc}</p>
            </div>
        </div>    
    )
}
