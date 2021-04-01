import React from "react";

export default function DropDown(props) {
	return (
		<span style={{display: "inline-flex"}}>
			<label>{props.label}</label>
			<select name={props.name} onChange={event => props.callback(event.target.value)}>
				{props.options.map((option) => <option value={option}>{option}</option>)}
			</select>
		</span>
	);
}
