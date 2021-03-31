import React, {useState} from 'react'
import {ord} from "../../functions/algebra/findOrd";
import Card from "../Card";
import {inputStyle} from "../../styles";

export default function OrdFinder(props) {
    const [result, setResult] = useState(null)
    const [a, setA] = useState("")
    const [n, setN] = useState("")
    return (
        <Card title={props.title}>
            <input value={a} onChange={event => setA(event.target.value)} type="number" placeholder="a"
                   style={inputStyle}/>
            <input value={n} onChange={event => setN(event.target.value)} type="number" placeholder="n"
                   style={inputStyle}/>
            <br/>
            <button onClick={() => setResult(ord(n, a))}
                    disabled={a === "0" || n === "0" || a === "" || n === ""}>Calculate
            </button>
            <ul style={{textAlign: "left"}}>
                {result != null ? result.dividers.map((value, index) =>
                    <li>{a}^{value} mod {n} = {result.ord[index]}</li>
                ) : null}
            </ul>
        </Card>
    )
}