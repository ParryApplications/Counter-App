import { useState } from "react";
import "../style/Counter.css";
import CounterBtn from "./CounterBtn";

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCount(countIncreasedBy) {
        setCount(count + countIncreasedBy);
    }

    function decrementCount(countDecreasedBy) {
        //Handling -ve validation:
        if ((count - countDecreasedBy) >= 0)
            setCount(count - countDecreasedBy);
        else
            console.log("Counter can't be -ve");
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div className="Counter">
            <p className="counterDisplay">{count}</p>
            <CounterBtn num={1} incrementCount={incrementCount} decrementCount={decrementCount} />
            <CounterBtn num={2} incrementCount={incrementCount} decrementCount={decrementCount} />
            <CounterBtn num={5} incrementCount={incrementCount} decrementCount={decrementCount} />
            <button className="resetBtn" onClick={resetCount}>Reset</button>
        </div>
    );
}