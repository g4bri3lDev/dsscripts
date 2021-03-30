import React, {useState} from 'react'
import {calcPrimes, printPhiFormula} from "../../functions/algebra/phi";
import Card from "../Card";
import {inputStyle} from "../../styles";

export default function Phi(props) {
    const [num, setNum] = useState()
    const [primes, setPrimes] = useState([])
    return (
        <Card title={props.title}>
            <input value={num} type="number" onChange={(event => {
                setNum(event.target.value);
                setPrimes(calcPrimes(event.target.value))
            })} style={inputStyle}/>
            {num > 2 ? <ul>
                    <li>Primfaktoren: {primes.map((el) => el + " ")}</li>
                    <li>{printPhiFormula(num)}</li>
                </ul>
                : null}
        </Card>

    )
}