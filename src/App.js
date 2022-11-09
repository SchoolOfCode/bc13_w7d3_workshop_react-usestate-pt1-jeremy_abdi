import React from "react";
import "./App.css";
import {useState} from "react";
import bootcamperNames from "./bootcampers.js";


// 👉 Write a function called `handleClick` within your app component, and inside of this, use the function from your useState to set the `bootcamperIndex` state to be a random number between zero and the length of the bootcampers array.
// 👉 In the JSX that the app component renders, update the button to call your `handleClick` function when it gets clicked. If you need a reminder on how to handle events in React, check the [docs](https://reactjs.org/docs/handling-events.html)

function App() {
  const [bootcamperIndex, setBootcamperIndex] =useState(0);
  function handleClick(){
    const bootcamperNumber= bootcamperNames.bootcampers.length
    const randomIndex = Math.floor(Math.random()*bootcamperNumber)
    setBootcamperIndex(randomIndex)
    // const bootcamperMember = bootcamperNames.bootcampers[bootcamperIndex]
    // return bootcamperMember;
  }

  const [count, setCount] =useState(0);
  function addCount() {
    const newCount = count +1;
    setCount(newCount);
    }
  return (
    <div className="App">
      <h1>React useState</h1>
      <button onClick= {addCount}>Increase Count</button>
      <h2>{count}</h2>
      <p>{bootcamperIndex}</p>
      <button onClick = {handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;
