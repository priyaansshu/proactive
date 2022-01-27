import React from "react";
import './App.css';
import "./style.css";
import ReactDOM from 'react-dom';
import {Route, Link, Routes} from "react-router-dom";
import TodoScreen from "./TodoScreen";
import Ideapad from "./Ideapad";

function App() {
  return(
    <>
      <Routes>
        <Route exact path="" element={<TodoScreen/>}/>
      </Routes>
      <Routes>
        <Route exact path="/ideapad" element={<Ideapad/>}/>
      </Routes>
    </>
  );
}
export default App;