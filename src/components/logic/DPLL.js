import React, {useState} from "react";
import Card from "../Card";
import {dpll, parseInput} from "../../functions/logic/dpll";
import '../../app.css'

export default function DPLL({title}) {
    const [input, setInput] = useState("")
    const [steps, setSteps] = useState([])
    return (
        <Card title={title}>
            Disclaimer: Sehr wahrscheinlich falsch<br/>
            <input value={input} onChange={event => setInput(event.target.value)} placeholder="{a,b},{-b,c}"/>
            <button onClick={() => input.length > 0 ? setSteps(dpll(parseInput(input), []).log) : null}>Solve</button>
            <ul style={{listStyleType: "none"}}>
                {steps ? steps.map((value, key) =>
                    <li key={key}>{value}</li>) : null}
            </ul>
        </Card>
    )
}