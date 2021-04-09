import React from 'react'
import Card from "../Card";
import KVMap from "../KVMap";
import { printDNF, printKNF } from "../../functions/logic/quinemccluskey";

export default class KNFDNF extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: [
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false]
            ],
            dnf: "",
            knf: "",
            textInput: "a,b,c,d",
            variables: ["a", "b", "c", "d"]
        }
    }

    setBox = (col, row) => {
        let tmpGrid = [...this.state.grid]
        tmpGrid[col][row] = !tmpGrid[col][row]
        this.setState({ grid: tmpGrid })
        this.setState({ dnf: printDNF(this.state.grid), knf: printKNF(this.state.grid) })
    }

    parseToVariables(str, variables) {
        return str.replaceAll("R", variables[0]).replaceAll("T", variables[2]).replaceAll("S", variables[1]).replaceAll("X", variables[3]);
    }

    render() {
        return (
            <Card title={this.props.title} >
                <div style={{ marginBottom: "0.5rem" }}>
                    Variablen: &nbsp;
                <input value={this.state.textInput} onChange={(event) => {
                        this.setState({ textInput: event.target.value, variables: event.target.value.split(",") });
                    }} />
                </div>
                <KVMap grid={this.state.grid} setBox={this.setBox} variables={this.state.variables} />
                <ul style={{ textAlign: "left" }}>
                    <li>V(Ʌ) DNF: {this.parseToVariables(this.state.dnf, this.state.variables)}</li>
                    <li>Ʌ(V) KNF:{this.parseToVariables(this.state.knf, this.state.variables)}</li>
                </ul>
            </Card >
        )
    }
}