import React, {useState} from "react";
import Card from "../Card";
import {canBeRealized} from "../../functions/graphs/graphProperties";

export default function GraphProperties(props) {
	const validationRegex = /^\s*(\d+\s*,\s*)*\d+\s*$/;
    const [input, setInput] = useState("")
    const [result, setResult] = useState({canBeRealized: null, steps: []})
    return (
        <Card title={props.title}>
            ( <input value={input} onChange={(event) => setInput(event.target.value)}/> )
            <button className="statusButton" disabled={!validationRegex.test(input)} onClick={() => setResult(canBeRealized(input))}>Calculate</button>
            <ul>
                <li>realisierbar: {result.canBeRealized != null ? result.canBeRealized ? " ✅" : " ❌" : null}</li>
                <ul style={{textAlign: "left"}}>
                    {result.steps.map(step =>
                        <li>{step}</li>)}
                </ul>
            </ul>
        </Card>
    )
}
