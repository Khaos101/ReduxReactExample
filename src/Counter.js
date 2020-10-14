import React from "react"
import { useSelector } from "react-redux"
import { selectCount } from "./features/counterReducer"


export default function Counter() {
    const value = useSelector(selectCount)
    return (
        <div>
        <label id="value">{value}</label>
        </div>
    )
}