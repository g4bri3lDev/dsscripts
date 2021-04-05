import React from 'react'
import Card from "../Card";
import KVMap from "../KVMap";

export default class KNFDNF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false]
            ]
        }
    }

    setBox = (col, row) => {
        let tmpGrid = [...this.state.grid]
        tmpGrid[col][row] = !tmpGrid[col][row]
        this.setState({grid: tmpGrid})
    }

    render() {
        return (
            <Card title={this.props.title}>
                <KVMap grid={this.state.grid} setBox={this.setBox}/>
                <ul>
                    <li>KNF:</li>
                    <li>DNF:</li>
                </ul>
            </Card>
        )
    }
}