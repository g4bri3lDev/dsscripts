import React, {useState} from "react";
import '../app.css'

const style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,1)",
    margin: "5px",
    padding: "16px",
    textAlign: "center",
    flexDirection: "column"
}
export default function Card(props) {
    const [collapsed, setCollapsed] = useState(!props.isCategory)
    return (
        <div className="Card" style={{...props.style, ...style}}>
            <h1 onClick={() => props.isCategory ? setCollapsed(prev => !prev) : null}>{props.title}{props.isCategory ? collapsed ? " -" : " +" : null}</h1>
            {collapsed ?
                <div style={props.style}>
                    {props.children}
                </div>
                : null}

        </div>
    )
}