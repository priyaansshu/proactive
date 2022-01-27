import React from 'react';
import ProgressItem from "./ProgressItem";
import "../style.css";

export default function Progress({progress, deleteProgress, editProgress}) {
  return(
      <>
        <div className="progress-container" style={progress.length === 0?{textAlign: "center", fontSize: "15px", marginTop: "10px", fontFamily: "netflixSansMedium"}:{color: "black"}}>
            {progress.length === 0? "Start working on your tasks":
            progress.map(todo => {                
                return <ProgressItem todo={todo} key={todo.sno} deleteProgress={deleteProgress} editProgress={editProgress}/>
                })
            }
        </div>
      </>
  )
}
