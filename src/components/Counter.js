import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const validateInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        setCount(+event.target.value)
    }
    const setValue = (value) => {
        if (value >= 0) {
            setCount(value)
        }
    }
    return (<>
        <h1>The value is: {count}</h1>
        <input onChange={validateInput} value={count} aria-label="count">
        </input>
        <button onClick={() => setValue(count + 1)} >
            +
        </button>
        <button onClick={() => setValue(count - 1)}>
            -
        </button>
    </>
    );
}

export default Counter;