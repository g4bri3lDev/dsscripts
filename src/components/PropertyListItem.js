import React, { useState } from "react";
import D3Graph from "./graphs/D3Graph";
import '../app.css'

export default function PropertyListItem({ property, steps, graph }) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    return (

        <li>
            <u onClick={() => setIsCollapsed(prev => !prev)}> {property}</u>
            {steps != null && !isCollapsed ?
                <ul>
                    {steps.map((step, key) =>
                        <li key={key}>{step}</li>)}
                </ul>
                : null}
            {graph != null && !isCollapsed ?
                <D3Graph id={property + "Graph"} data={graph} />
                : null}
        </li>


    )
}