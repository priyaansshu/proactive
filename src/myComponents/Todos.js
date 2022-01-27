import React from 'react'
import TodoItem from "./TodoItem"
import "../style.css";

export default function Todos({todos, onDelete, addProgress, edit}) {
    return (
        <>
            <div className="todo-container" style={todos.length === 0?{textAlign: "center", fontSize: "15px", marginTop: "10px", fontFamily: "netflixSansMedium"}:{color: "black"}}>
                {todos.length === 0? "No todos":
                todos.map(todo => {                
                    return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} addProgress={addProgress} edit={edit}/>
                    })
                }
            </div>
        </>
    )
}


//1. using map() because is returns arrays, which we need here. 2. Todo is a userdefined name for one element of the todos array, you could also use any other name and it would work just fine