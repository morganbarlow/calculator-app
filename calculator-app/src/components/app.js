import { useState } from "react";
import React, { Component } from 'react';

function App() {
  const [result, setResult] = useState('')
  return(
    <div className = "page-container">
      <div className = "input-display">
        <form>
          <input type = 'text' className = 'user-input'/>
        </form>
      </div>

      <div className = "button-display">
        <div className = "top-row">
          <button>CE</button>
          <button>C</button>
          <button>del</button>
          <button>/</button>
        </div>
        <div className = "second-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
        </div>
        <div className = "third-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className = "fourth-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className = "bottom-row">
          <button>+/-</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App

// export default class App extends Component {
//   render() {
//     return (
//       <div className='app'>
//         <h1>DevCamp React Starter</h1>
//         <h2>React Skeleton</h2>
//       </div>
//     );
//   }
// }