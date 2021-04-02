import React from "react";

export default function CheckBox(props) {
    return (
        <span style={{display: "inline-flex"}}>
            <label>{props.label}</label>
            <input type="checkbox" onChange={event => props.callback(event.target.checked)}/>
        </span>
    );
}
