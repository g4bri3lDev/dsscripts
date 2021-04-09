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
            knf: ""
        }
    }

    setBox = (col, row) => {
        let tmpGrid = [...this.state.grid]
        tmpGrid[col][row] = !tmpGrid[col][row]
        this.setState({ grid: tmpGrid })
        this.setState({ dnf: printDNF(this.state.grid), knf: printKNF(this.state.grid) })
    }

    render() {
        return (
            <Card title={this.props.title} >
                <KVMap grid={this.state.grid} setBox={this.setBox} />
                <ul style={{ textAlign: "left" }}>
                    <li>V(Ʌ) DNF: {this.state.dnf}</li>
                    <li>Ʌ(V) KNF:{this.state.knf}</li>
                </ul>
            </Card >
        )
    }
}