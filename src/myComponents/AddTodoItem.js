import React from 'react';
import { useState } from "react";
import "../style.css";
import { useRef } from 'react';

export default function AddTodoItem(props) {
    let flag = 0;
    let p = 0;
    const [tempTitle, setTitle] = useState("")
    const [tempDesc, setDesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        let tempIndex = props.todos.length+1;
        let tempObj = {
            sno: tempIndex,
            title: tempTitle,
            desc: tempDesc
        }
        setTitle("");
        setDesc("");
        props.addTodo(tempObj);
    }
    return(
        <>
            <form onSubmit={submit} id="add-todo-form">
                <div className="add-todo">
                    <input style={{display:"inline", marginRight: "5px"}} type="text" className="form-input" id='placeholder-text' onChange={(e)=>{setTitle(e.target.value); flag=1}} placeholder="Add Todo" value={tempTitle}/>
                    {(()=>{
                        if(tempTitle!=="")
                            flag=1;
                        else
                            flag=0;
                    })()}
                    {flag==0?
                        <>
                            {document.body.classList.remove("add-desc")}
                            <button type="submit" className="btn btn-primary" id="todo-submit-button" disabled></button>
                        </>
                    :
                        <>
                            {document.body.classList.add("add-desc")}
                            <div className="add-todo-bottom-section">
                                <textarea className="form-input todo-description" id='desc-textarea' placeholder='Add description' 
                                onChange={(e)=>{setDesc(e.target.value);}} value={tempDesc}>
                                </textarea>
                            </div>   
                            <button type="submit" className="btn btn-primary" id="todo-submit-button" ></button>
                        </>
                    }
                </div>
            </form>
        </>
    )
}

// onKeyDown={(e)=>{
//     if(e.keyCode == 13){
//         e.target.value +=  "\n" + "•";
//         console.log(tempDesc);
//     }
// }}
