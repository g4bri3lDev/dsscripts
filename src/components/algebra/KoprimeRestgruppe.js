import React, {useState, useEffect} from 'react'
import {printPhiFormula} from "../../functions/algebra/phi";
import {lcmm, primeFactors, calcGroup, calcElemGroups, isCyclic} from "../../functions/algebra/koprimeRestgruppe";
import {printPrimeFactors, printArrayWithSep} from "../../functions/utils";
import Card from "../Card";
import {inputStyle} from "../../styles";

export default function KoprimeRestgruppe(props) {
    const [factors, setFactors] = useState(null)
    const [group, setGroup] = useState(null)
    const [elemGroups, setElemGroups] = useState([]);
    const [elemGroupsOrd, setElemGroupsOrd] = useState([]);
    const [n, setN] = useState("")

    useEffect(() => {
        setFactors(primeFactors(n));
        let g = calcGroup(n);
        setGroup(g);
        let eg = calcElemGroups(g, n);
        setElemGroups(eg)
        setElemGroupsOrd(eg.map((elemGroup) => elemGroup.length));
    }, [n]);

    return (
        <Card title={props.title}>
            <input value={n} min="1" max="50" onChange={event => setN(parseInt(event.target.value))} type="number" placeholder="n" style={inputStyle} />
            <br />
            Primfaktoren: {n} = {printPrimeFactors(factors)}
            <br />
            ℤₙ⃰={"{"+group+"}"}
            <br />
            |ℤₙ⃰|={printPhiFormula(n)}
            <br />
            <ul style={{textAlign: "left"}}>
            {group ?
                group.map((element, index) =>
                    <li>
                        ⟨{element}⟩={"{" + printArrayWithSep(elemGroups[index], ",") + "}"}
                        <span style={{float: "right", margin: "0 1em"}}>ord: {elemGroups[index].length}</span>
                    </li>
                )
                : ""
            }
            </ul>
            <br />
            zyklisch ⇔ n∈&#123;2,4,pʳ,2pʳ|p∈ℙ∖&#123;2&#125;,r∈ℕ&#125;: {isCyclic(n, factors) ? "✅" : "❌"}
        </Card>
    )
}