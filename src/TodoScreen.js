import React from "react";
import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import AddTodoItem from './myComponents/AddTodoItem';
import Progress from "./myComponents/Progress";
import Completed from "./myComponents/Completed"
import { useState } from "react";
import "./style.css";
import ReactDOM from 'react-dom';


export default function TodoScreen() {
  
    function addTodo(tempObj){
        setTodos([...todos, tempObj]);
    }
    
    function addProgress(todo){
        setProgress([...progress, todo]);
        setTodos(todos.filter((e)=>{
        return e !== todo
        }))
    }
    
    function deleteProgress(todo){
        let tempObj = todo;
        tempObj.sno = completed.length + 1;
        setCompleted([...completed, tempObj])
        console.log(completed);
        setProgress(progress.filter((e)=>{
        return e !== todo
        }))
    }
    
    function onDelete(todo){
        let tempObj = todo;
        tempObj.sno = completed.length + 1;
        setCompleted([...completed, tempObj])
        console.log(tempObj);
        console.log(completed);
        setTodos(todos.filter((e)=>{
        return e !== todo
        }))
    }
    
    function remove(todo){
        setCompleted(completed.filter((e)=>{
            return e!== todo;
        }))
    }

    function edit(todo, tempTitle, tempDesc){
        let tempTodos = todos;
        tempTodos[todo.sno-1].title = tempTitle;
        tempTodos[todo.sno-1].desc = tempDesc;
        setTodos(tempTodos);
    }
    
    function editProgress(todo, tempTitle, tempDesc){
        let tempTodos = progress;
        tempTodos[todo.sno-1].title = tempTitle;
        tempTodos[todo.sno-1].desc = tempDesc;
        setProgress(tempTodos);
    }

    const [todos, setTodos] = useState("")
    const [progress, setProgress] = useState("")
    const [completed, setCompleted] = useState("")
        
    return(
        <div>
            <Header/>
            <div className="main-container">
            <div className="main-column" id="todo-column">
                <div className="column-top-container">
                    <h3 className="column-heading" >To do</h3>
                    <h3 className="task-count">{todos.length}</h3>
                </div>
                <AddTodoItem todos={todos} addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete} addProgress={addProgress} edit={edit}/>
            </div>
            <div className="main-column" id="progress-column">
                <div className="column-top-container">
                <h3 className="column-heading" >In progress</h3>
                <h3 className="task-count">{progress.length}</h3>
                </div>
                <Progress progress={progress} deleteProgress={deleteProgress} editProgress={editProgress}/>
            </div>
            <div className="main-column" id="completed-column">
                <div className="column-top-container">
                <h3 className="column-heading" >Completed</h3>
                <h3 className="task-count">{completed.length}</h3>
                </div>
                <Completed completed={completed} remove={remove}/>
            </div>
            </div>
            <Footer screen={0}/>
        </div>
    );
}


