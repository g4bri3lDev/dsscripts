import React, {useState} from "react";
import Card from "../Card";
import {canBeRealized, handshakingLemma} from "../../functions/graphs/graphProperties";
import PropertyListItem from "../PropertyListItem";

export default function GraphProperties(props) {
    const validationRegex = /^\s*(\d+\s*,\s*)*\d+\s*$/;
    const [input, setInput] = useState("")
    const [realizeResult, setRealizeResult] = useState({canBeRealized: null, steps: []})
    const [handshakeResult, setHandshakeResult] = useState({vertices: null, edges: null, steps: []})
    return (
        <Card title={props.title}>
            ( <input value={input} onChange={(event) => setInput(event.target.value)}/> )
            <button className="statusButton" disabled={!validationRegex.test(input)}
                    onClick={() => {
                        setRealizeResult(canBeRealized(input));
                        setHandshakeResult(handshakingLemma(input))
                    }}>Calculate</button>
            <ul>
                <PropertyListItem property="Realisierbarkeit:" steps={realizeResult.steps}/>
                {realizeResult.canBeRealized ?
                    <PropertyListItem property="Handschlaglemma:" steps={handshakeResult.steps}/>
                    : null}
            </ul>
        </Card>
    )
}
