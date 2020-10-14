import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { decrement, increment, decrementBy, incrementBy } from "./features/counterReducer";


export default function IncrementSystem() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    return (
        <div>
        <input type="text" size="4" value={amount} onChange={e => setAmount(e.target.value)}/>
        <button onClick={() => dispatch(Number(amount) > 0 ? decrementBy(amount) : decrement())}>-</button>
        <button onClick={() => dispatch(Number(amount) > 0 ? incrementBy(amount) : increment())}>+</button>
        </div>
    )
}