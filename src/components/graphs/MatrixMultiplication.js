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
import {inputStyle} from "../../styles";

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
            <p>
                <DropDown options={["matrixMultiplikation", "randomSurfer"]} callback={setMode} />&thinsp;
                {mode === "matrixMultiplikation" ?
                    <>
                        <DropDown options={["^", "<="]} callback={setOption}/>
                        <input size="2" type="number" value={power} min={0} max={99}
                               onChange={event => setPower(event.target.value)} style={inputStyle}/>
                    </>
                    : "P"}
                <button
                    onClick={() => setMultipliedMatrix(mode === "matrixMultiplikation" ? option === "^" ? matrixPower(data, power) : matrixSum(data, power) : createProbabilityMatrix(data))}>=
                </button>
            </p>
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
