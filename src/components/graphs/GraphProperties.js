import React, {useState} from "react";
import Card from "../Card";

export default function GraphProperties(props) {
    const [input, setInput] = useState("")
    return (
        <Card title={props.title}>
            ( <input value={input} onChange={(event) => setInput(event.target.value)}/> )
        </Card>
    )
}