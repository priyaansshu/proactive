import React from "react";
import "../style.css";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() { 
  const [count, setCount] = useState(0);
  const prompts = [
    "to do",
    "to read",
    "to drink",
    "to workout",
    "to visit priyanshumodi.me",
    "to speak up",
    "to carpediem",
    "to laugh",
    "to love"
  ]
  let tempCount=0;
  useEffect(() => {
    setInterval(() => {
      if(tempCount==prompts.length-1){
        setCount(0);
        tempCount=0;
      }
      else{
        tempCount++;
        console.log(tempCount);
        setCount(count => count+1);
      }
    }, 3000);
  }, []);

  return (
    <nav className="navbar">
      <h2 id="to-prompts">{count==4?<span>to-visit <a style={{textDecoration: "none"}}href="https://priyanshumodi.me" target="_blank">priyanshumodi.me</a></span>:prompts[count]}</h2>
      <h2 id="projects-text">Proactive</h2>
      <Link to="/ideapad" style={{textDecoration: "none"}}>
        <h2 id="ideapad-text">Ideapad</h2>
      </Link>
    </nav>
  );
}