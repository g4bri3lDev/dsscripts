import React, {useState} from 'react'
import {gsRun} from "../../functions/algebra/galeShapley";
import Card from "../Card";
import {inputStyle} from "../../styles";

// frag nicht... ich versteh es selbst nicht ganz
export default function GaleShapley(props) {
    const [table, setTable] = useState([[[1,3,4,2],[3,4,2,1]],[[4,1,3,2],[2,1,3,4]],[[4,3,1,2],[3,1,2,4]],[[3,4,1,2],[4,3,2,1]]])
    const [result, setResult] = useState(null)
    const [n, setN] = useState(4)
    const [a, setA] = useState("Männer")
    const [b, setB] = useState("Frauen")
    const [prefix, setPrefix] = useState(false)
    const symbols = ["💍", "🧺", "💔"]

    // TODO: better defaults?
    const getDefault = (n) => {
        let newTable = [];
        for(let i=0; i<n; i++) {
            let row = [];
            row[0] = [];
            row[1] = [];
            for(let j=0; j<n; j++){
                row[0][j] = n-j;
                row[1][j] = n-j;
            }
            newTable[i] = row;
        }
        return newTable;
    }

    const getAPrefix = () => {
        return prefix ? a.charAt(0) : "";
    }
    const getBPrefix = () => {
        return prefix ? b.charAt(0) : "";
    }

    const createTable = (n) => {
        setN(n);
        setTable(getDefault(n));
    }

    const setCell = (row,gen,col,val) => {
        // dirty way to create deep copy
        let newTable = JSON.parse(JSON.stringify(table));
        newTable[row][gen][col] = parseInt(val)
        setTable(newTable)
    }

    return (
        <Card title={props.title}>
            <p>
                Matche
                <input size="2" value={n} min="1" onChange={event => createTable(event.target.value)} type="number" placeholder="n" style={inputStyle}/>
                <input size="10" value={a} onChange={event => setA(event.target.value)} type="text" placeholder="a" style={inputStyle}/>
                mit
                <input size="10" value={b} onChange={event => setB(event.target.value)} type="text" placeholder="b" style={inputStyle}/>
                ({a} machen {b} Antrag)
            </p>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th colSpan={n}>{a}</th>
                    <th colSpan={n}>{b}</th>
                </tr>
                </thead>
                <tbody>
                {table != null ? table.map((row, rowid) =>
                    <tr>
                        <td>{rowid+1}</td>
                        {row.map((gender, genderid) => gender.map((col,colid) =>
                            <td><input size="2" value={col} min="1" max={n} onChange={event => setCell(rowid,genderid,colid,event.target.value)} type="number" style={inputStyle}/></td>
                        ))}
                    </tr>
                ) : null}
                </tbody>
            </table>
            <p>
                <button onClick={event => setPrefix(!prefix)}>Toggle Prefix</button>&nbsp;
                <button onClick={() => {
                    let r = gsRun(JSON.parse(JSON.stringify(table)), n);
                    if(r != null) setResult(r);
                }}>Calculate</button>
            </p>
            <table>
                <thead>
                <tr>
                    <th>Schritt</th>
                    <th>Verlobung</th>
                    <th colSpan={n}>{a} verlobt mit</th>
                    <th colSpan={n}>{b} verlobt mit</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    {[...Array(n)].map((_,i) => <td>{getAPrefix()}{i+1}</td>)}
                    {[...Array(n)].map((_,i) => <td>{getBPrefix()}{i+1}</td>)}
                </tr>
                </thead>
                <tbody>
                {result != null ? result.map((row, rowid) =>
                    <tr>
                        <td>{rowid+1}</td>
                        <td>{getAPrefix()}{row[0][0]+1} ➡ {getBPrefix()}{row[0][1]+1} <span style={{"fontSize":"7pt"}}>{symbols[row[0][2]]}</span></td>
                        {row[1].map((val) =>
                            <td>{val >= 0 ? getBPrefix()+(val+1) : ""}</td>
                        )}
                        {row[2].map((val) =>
                            <td>{val >= 0 ? getAPrefix()+(val+1) : ""}</td>
                        )}
                    </tr>
                ) : null}
                </tbody>
            </table>
            <p>
                <b>Finales Matching 💍:</b>
            </p>
            <ul>
                {result != null ? result[result.length-1][1].map((b, a) =>
                    <li>{a+1} → {b+1}</li>
                ) : null}
            </ul>
            <p style={{"fontSize":"7pt"}}>
                Symbole:<br/>
                {symbols[0]} Verlobung<br/>
                {symbols[1]} Korb<br/>
                {symbols[2]} Trennung+Verlobung<br/>
                Keine Garantie auf die Korrektheit der Ergebnisse!</p>
        </Card>
    )
}