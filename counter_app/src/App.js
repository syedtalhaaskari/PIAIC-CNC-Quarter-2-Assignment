import React, { useState } from "react";
import "./App.css";

const App = () => {
    let [counter, setCounter] = useState(() => 0)

    return (
        <div>
            <h1>PIAIC CNC Quarter 2 Counter App</h1>
            <h2>Syed Talha Askari PIAIC92809</h2>
            <div>{counter}</div>
            <div className="mt-2">
                <button onClick={() => setCounter((prevCounter) => ++prevCounter)} className="btn">Increment</button>
                <button onClick={() => setCounter((prevCounter) => --prevCounter)} className="btn ml-2">Decrement</button>
                <button onClick={() => setCounter(() => 0)} className="btn ml-2">Reset</button>
            </div>
        </div>
    )
}

export default App;