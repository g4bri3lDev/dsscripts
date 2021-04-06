import React, {useState} from 'react'
import Card from "../Card";
import {inputStyle} from "../../styles";

export default function GoldenListHead(props) {
    const [result, setResult] = useState(null)
    const [k, setK] = useState("")
    const [n, setN] = useState("")
    return (
        <Card title={props.title}>
            <input value={n} min="0" onChange={event => setN(event.target.value)} type="number" placeholder="n"
                   style={inputStyle}/>
            <input value={k} min="0" onChange={event => setK(event.target.value)} type="number" placeholder="k"
                   style={inputStyle}/>
            <br/>
            <button onClick={() => setResult(props.function(parseInt(n), parseInt(k)))}>Calculate
            </button><br/>
            {result}
            <p style={{"fontSize":"8pt"}}>
                {props.text !== undefined ? props.text.map((line) =>
                    <>{line} <br/></>
                ) : ""}
            </p>
        </Card>
    )
}
