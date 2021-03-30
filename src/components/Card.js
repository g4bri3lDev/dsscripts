import React from "react";

const style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: "5px",
    padding: "16px",
    textAlign: "center",
    flexDirection: "column"
}
export default function Card(props) {
    return (
        <div style={{...props.style, ...style}}>
            <h1>{props.title}</h1>
            <div style={props.style}>
                {props.children}
            </div>

        </div>
    )
}