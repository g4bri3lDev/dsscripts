import React, {useState} from 'react'
import {gsRun} from "../../functions/graphs/galeShapley";
import Card from "../Card";
import {inputStyle} from "../../styles";

// frag nicht... ich versteh es selbst nicht ganz
export default function GaleShapley(props) {
    const [table, setTable] = useState([[[1,3,4,2],[4,1,3,2],[4,3,1,2],[3,4,1,2]],[[3,4,2,1],[2,1,3,4],[3,1,2,4],[4,3,2,1]]]);
    const [result, setResult] = useState(null);
    const [n, setN] = useState(4);
    const [types, setTypes] = useState(["Männer", "Frauen"]);
    const [prefix, setPrefix] = useState(false);
    const symbols = ["💍", "🧺", "💔"];

    // TODO: better defaults?
    const getDefault = (n) => {
        let newTable = [];
        for(let i=0; i<2; i++) {
        	newTable[i] = [];
        	for(let j=0; j<n; j++) {
            	newTable[i][j] = [];
            	for(let k=0; k<n; k++){
                	newTable[i][j][k] = n-k;
	            }
    	    }
        }
        return newTable;
    }

    const swapSides = () => {
		swapValues();
    	setTypes([types[1],types[0]]);
    }

    const swapValues = () => {
		let newTable = [];
        newTable[0] = [];
        newTable[1] = [];
        for(let j=0; j<n; j++) {
        	newTable[0][j] = [];
        	newTable[1][j] = [];
           	for(let k=0; k<n; k++){
             	newTable[0][j][k] = table[1][j][k];
             	newTable[1][j][k] = table[0][j][k];
	        }
    	}
    	setTable(newTable);
    }

    const validate = () => {
		let test = 0;
    	for(let i=1; i<=n; i++) {
    		test += i;
    	}
    	for(let i=0; i<2; i++) {
        	for(let j=0; j<n; j++) {
            	if(table[i][j].reduce((a,b) => a+b, 0) !== test){
            		return false;
            	}
    	    }
        }
        return true;
    }

    const calculate = () => {
    	let r = gsRun(JSON.parse(JSON.stringify(table)), n);
    	if(r != null) setResult(r);
    }

    const getPrefix = (type) => {
        return prefix ? types[type].charAt(0) : "";
    }
    
    const createTable = (n) => {
        setN(n);
        setTable(getDefault(n));
    }

	const setType = (type, value) => {
		let newTypes = types.slice();
		newTypes[type] = value;
		setTypes(newTypes);
	}

    const setCell = (type,row,col,val) => {
        // dirty way to create deep copy
        let newTable = JSON.parse(JSON.stringify(table));
        newTable[type][row][col] = parseInt(val);
        setTable(newTable);
    }

    return (
        <Card title={props.title}>
            <p>
                Matche
                <input size="2" value={n} min="1" onChange={event => createTable(event.target.value)} type="number" placeholder="n" style={inputStyle}/>
                <input size="10" value={types[0]} onChange={event => setType(0, event.target.value)} type="text" placeholder="a" style={inputStyle}/>
                mit
                <input size="10" value={types[1]} onChange={event => setType(1, event.target.value)} type="text" placeholder="b" style={inputStyle}/>
                <br/>
                ({types[0]} machen {types[1]} Antrag)
            </p>
            <div style={{display: "flex", flexFlow: "wrap"}}>
           	{table.map((type, typeId) =>
            <table>
                <thead>
                <tr>
                    <th colSpan={n}>{types[typeId]}</th>
                </tr>
                </thead>
                <tbody>
					{type.map((row, rowId) =>
                	<tr>
               			{row.map((col, colId) =>
                   		<td><input size="2" value={col} min="1" max={n} onChange={event => setCell(typeId,rowId,colId,event.target.value)} type="number" style={inputStyle}/></td>
                		)}
                	</tr>
                	)}
                </tbody>
            </table>
            )}
            </div>
            <p>
                <button onClick={() => setPrefix(!prefix)}>Toggle Prefix</button>&nbsp;
                <button onClick={() => swapValues()}>Swap Values</button>&nbsp;
				<button onClick={() => swapSides()}>Swap Sides</button>&nbsp;
                <button onClick={() => calculate()} disabled={!validate()} className="statusButton">Calculate</button>
            </p>
            <table className="narrowTable">
                <thead>
                <tr>
                    <th></th>
                    <th>Verlobung</th>
                    {table.map((_,typeId) => <th colSpan={n}>{types[typeId]} verlobt mit</th>)}
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    {table.map((type,typeId) => type.map((_, j) => <th>{getPrefix(typeId)}{j+1}</th>))}
                </tr>
                </thead>
                <tbody>
                {result != null ? result.map((row, rowid) =>
                    <tr>
                        <td>{rowid+1}</td>
                        <td>{getPrefix(0)}{row[0][0]+1} ➡ {getPrefix(1)}{row[0][1]+1} <span style={{fontSize:".5em"}}>{symbols[row[0][2]]}</span></td>
                        {row[1].map((val) =>
                            <td>{val >= 0 ? getPrefix(1)+(val+1) : ""}</td>
                        )}
                        {row[2].map((val) =>
                            <td>{val >= 0 ? getPrefix(0)+(val+1) : ""}</td>
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
                    <li>{getPrefix(0)+(a+1)} → {getPrefix(1)+(b+1)}</li>
                ) : null}
            </ul>
            <p style={{fontSize:".5em"}}>
                Symbole:<br/>
                {symbols[0]} Verlobung<br/>
                {symbols[1]} Korb<br/>
                {symbols[2]} Trennung+Verlobung<br/>
                Keine Garantie auf die Korrektheit der Ergebnisse!
			</p>
        </Card>
    )
}
