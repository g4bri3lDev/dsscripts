import React from "react";

export default function PropertyListItem({property, steps}) {
    return (
        <li>
            {property}
            <ul>
                {steps.map(step =>
                    <li>{step}</li>)}
            </ul>
        </li>
    )
}