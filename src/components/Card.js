import React from "react";

const style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: "5px",
    padding: "2px 16px",
    textAlign:"center"
}
export default function Card(props) {
    return <div style={style}>
        <h1>{props.title}</h1>
        {props.children}
    </div>
}