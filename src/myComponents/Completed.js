import React from 'react';
import CompletedItem from "./CompletedItem";
import "../style.css";

export default function Completed({completed, remove}) {
  return(
      <>
        <div className="completed-container" style={completed.length === 0?{textAlign: "center", fontSize: "15px", marginTop: "10px", fontFamily: "netflixSansMedium"}:{color: "black"}}>
            {completed.length === 0? "No tasks completed yet":
            completed.map(todo => {                
                return <CompletedItem todo={todo} key={todo.sno} remove={remove}/>
                })
            }
        </div>
      </>
  )
}