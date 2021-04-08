import React, {useState} from "react";
import Card from "../Card";
import Matrix from "../Matrix";
import {
    createProbabilityMatrix,
    matrixPower,
    matrixSum,
    probabilityMatrixAfterT
} from "../../functions/graphs/matrixMultiplication";
import DropDown from "../DropDown";

export default function MatrixMultiplication({title}) {
    const [data, setData] = useState(new Array(4).fill(0).map(() => new Array(4).fill(0)))
    const [power, setPower] = useState(2)
    const [mode, setMode] = useState("matrixMultiplikation")
    const [option, setOption] = useState("^")
    const [multipliedMatrix, setMultipliedMatrix] = useState(matrixPower(data, power))
    const [matrixAfterT, setMatrixAfterT] = useState(probabilityMatrixAfterT(data, power))
    return (
        <Card title={title}>

            <Matrix editable={true} data={data} setData={setData}/>
            <DropDown options={["matrixMultiplikation", "randomSurfer"]} callback={setMode}/>
            {mode === "matrixMultiplikation" ? <>
                    <DropDown label="  " options={["^", "<="]} callback={setOption}/>

                    <input type="number" style={{width: 25}} value={power} min={0}
                           onChange={event => setPower(event.target.value)}/>
                </>
                : "P"}
            <button
                onClick={() => setMultipliedMatrix(mode === "matrixMultiplikation" ? option === "^" ? matrixPower(data, power) : matrixSum(data, power) : createProbabilityMatrix(data))}>=
            </button>
            <Matrix editable={false} data={multipliedMatrix} setData={setMultipliedMatrix}/>
            {mode === "randomSurfer" ? <>
                    Q
                    <input type="number" style={{width: 25}} value={power} min={0}
                           onChange={event => setPower(event.target.value)}/>
                    <button onClick={() => setMatrixAfterT(probabilityMatrixAfterT(data, power))}>=</button>
                    <Matrix editable={false} data={matrixAfterT} setData={setMatrixAfterT}/>
                </>
                : null}
        </Card>
    )
}