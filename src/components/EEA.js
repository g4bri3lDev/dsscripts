import React, {useState} from "react";
import {eea, ggt} from "../functions/eea";
import Card from "./Card";
import {inputStyle} from "../styles";

export default function EEA() {
    const [table, setTable] = useState(null)
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    return (
        <Card>
            <h1>EEA:</h1>
            <input value={a} onChange={event => setA(event.target.value)} type="number" style={inputStyle}/>
            <input value={b} onChange={event => setB(event.target.value)} type="number" style={inputStyle}/>
            <br/>
            <button onClick={() => setTable(eea(a, b))}
                    disabled={a === "0" || b === "0" || a === '' | b === ''}>Calculate
            </button>
            <table style={{marginLeft: "auto", marginRight: "auto", marginTop: "15px"}}>
                <thead>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>b mod a</th>
                    <th>α</th>
                    <th>β</th>
                </tr>
                </thead>
                <tbody>
                {table != null ? table.map((row) =>
                    <tr>
                        <td>{row.a}</td>
                        <td>{row.b}</td>
                        <td>{row.modulo}</td>
                        <td>{row.alpha}</td>
                        <td>{row.beta}</td>
                    </tr>
                ) : null}

                </tbody>
            </table>
            <br/>
            {table != null ? <div>
                ggT(a,b) = α · a + β · b für α = {table[0].alpha} und β
                = {table[0].beta}<br/> = {ggt(table[0].a, table[0].b, table[0].alpha, table[0].beta)}
            </div> : null}
        </Card>
    )
}