import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
<HashRouter>
  <App />
</HashRouter>,
  document.getElementById('root') //this line is telling the react app to inject the line 9 content to this selected element.
);
reportWebVitals();
