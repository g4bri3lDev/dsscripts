import React, {useState} from 'react'
import {calcPrimes, printPhiFormula} from "../functions/phi";

export default function Phi() {
    const [num, setNum] = useState()
    const [primes, setPrimes] = useState([])
    return (
        <div>
            <h1>Eulerische Phi Funktion:</h1>
            <input value={num} type="number" onChange={(event => {
                setNum(event.target.value);
                setPrimes(calcPrimes(event.target.value))
            })}/>
            {num > 2 ? <ul>
                    <li>Primfaktoren: {primes.map((el) => el + " ")}</li>
                    <li>{printPhiFormula(num)}</li>
                </ul>
                : null}
        </div>

    )
}