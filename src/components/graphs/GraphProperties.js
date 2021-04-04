import React, {useState} from "react";
import Card from "../Card";
import {canBeRealized, createGraphFromSequence, handshakingLemma} from "../../functions/graphs/graphProperties";
import PropertyListItem from "../PropertyListItem";

export default function GraphProperties(props) {
    const validationRegex = /^\s*(\d+\s*,\s*)*\d+\s*$/;
    const [input, setInput] = useState("")
    const [realizeResult, setRealizeResult] = useState({canBeRealized: null, steps: []})
    const [handshakeResult, setHandshakeResult] = useState({vertices: null, edges: null, steps: []})
    const [graphData, setGraphData] = useState({
        nodes: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
        links: [{source: 1, target: 2}, {source: 2, target: 0}, {source: 2, target: 3}]
    })

    function processSequence(input) {
        canBeRealized(input).then((realized) => {
                setRealizeResult(realized)
                if (realized.canBeRealized) {
                    setHandshakeResult(handshakingLemma(input))
                    setGraphData(createGraphFromSequence(input))
                }
            }
        )
    }

    return (
        <Card title={props.title}>
            ( <input value={input} onChange={(event) => setInput(event.target.value)}/> )
            <button className="statusButton" disabled={!validationRegex.test(input)}
                    onClick={() => {
                        processSequence(input)
                    }}>Calculate</button>
            <ul>
                <PropertyListItem property="Realisierbarkeit:" steps={realizeResult.steps}/>
                {realizeResult.canBeRealized ?
                    <>
                        <PropertyListItem property="Handschlaglemma:" steps={handshakeResult.steps}/>

                        <PropertyListItem property="Beispielgraph:" graph={graphData}/>
                    </>
                    : null}
            </ul>

        </Card>
    )
}
