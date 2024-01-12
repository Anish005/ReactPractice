import React from 'react';//react --> core foundational lib
import ReactDOM from 'react-dom/client';// react-dom --> implementation of react on web
import App from './App';
/*react creates its own dom referred as virtual dom and it compares it to the main dom and make changes accordingly
in the required places,
react-scripts  does the background work that is importing or injecting index.js in the index.html then notice the
difference while running using vite and learn how background work is done there*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

