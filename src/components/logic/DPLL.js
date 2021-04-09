import React, {useState} from "react";
import Card from "../Card";
import {dpll, parseInput} from "../../functions/logic/dpll";
import '../../app.css'

export default function DPLL({title}) {
    const [input, setInput] = useState("")
    return (
        <Card title={title}>
            Disclaimer: Sehr wahrscheinlich falsch<br/>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <button onClick={() => dpll(parseInput(input))}>Solve</button>
        </Card>
    )
}