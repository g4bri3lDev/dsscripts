import React from "react";
import '../app.css'

export default function DropDown(props) {
    return (
        <span style={{display: "inline-flex"}}>
            <label>{props.label}</label>
            <select style={{color: "var(--primaryTextColor)", backgroundColor: "var(--primaryBackgroundColor)"}}
                    name={props.name} onChange={event => props.callback(event.target.value)}>
                {props.options.map((option) => <option value={option}>{option}</option>)}
            </select>
        </span>
    );
}
