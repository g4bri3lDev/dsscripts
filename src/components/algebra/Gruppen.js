import React, {useState, useEffect} from 'react'
import {printPrimeFactors} from "../../functions/utils";
import {printPhiFormula} from "../../functions/algebra/phi";
import {primeFactors, isCyclic} from "../../functions/algebra/koprimeRestgruppe";
import Card from "../Card";
import {inputStyle} from "../../styles";

export default function Gruppen(props) {
    const [n, setN] = useState()
    const [factors, setFactors] = useState(null);

    useEffect(() => {
        setFactors(primeFactors(n));
    }, [n]);

    return (
        <Card title={props.title}>
            <input value={n} min="1" max="50" onChange={event => setN(parseInt(event.target.value))} type="number" placeholder="n" style={inputStyle} />
            <br />
            Primfaktoren: {n} = {printPrimeFactors(factors)}
            <br />
            |ℤₙ⃰|={printPhiFormula(n)}
            <br />
            zyklisch ⇔ n∈&#123;2,4,pʳ,2pʳ|p∈ℙ∖&#123;2&#125;,r∈ℕ&#125;: {isCyclic(n, factors) ? "✅" : "❌"}
        </Card>
    )
}
