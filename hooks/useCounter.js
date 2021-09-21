import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    const increment = (inc=1) => {
        setCounter(counter + inc);
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = (inc = 1) => {
        setCounter(counter - inc);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
