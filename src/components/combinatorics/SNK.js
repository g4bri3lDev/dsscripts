import React, {useState} from 'react'
import {calcSnk} from "../../functions/combinatorics/snk";
import Card from "../Card";
import {inputStyle} from "../../styles";

export default function SNK(props) {
    const [result, setResult] = useState(null)
    const [k, setK] = useState("")
    const [n, setN] = useState("")
    return (
        <Card title={props.title}>
            <input value={n} onChange={event => setN(event.target.value)} type="number" placeholder="n"
                   style={inputStyle}/>
            <input value={k} onChange={event => setK(event.target.value)} type="number" placeholder="k"
                   style={inputStyle}/>
            <br/>
            <button onClick={() => setResult(calcSnk(n, k))}>Calculate
            </button><br/>
            {result}
            <p style={{"fontSize":"8pt"}}>
                Bälle unterscheidbar<br/>
                Urnen gleich<br/>
                mind. 1 Ball pro Urne<br/>
            </p>
        </Card>
    )
}