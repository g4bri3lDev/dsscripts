import React, {useState} from "react";

const style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: "5px",
    padding: "16px",
    textAlign: "center",
    flexDirection: "column"
}
export default function Card(props) {
    const [collapsed, setCollapsed] = useState(!props.isCategory)
    return (
        <div style={{...props.style, ...style}}>
            <h1 onClick={() => props.isCategory ? setCollapsed(prev => !prev) : null}>{props.isCategory ? collapsed ? "↓ " : "→ " : null}{props.title}</h1>
            {collapsed ?
                <div style={props.style}>
                    {props.children}
                </div>
                : null}

        </div>
    )
}