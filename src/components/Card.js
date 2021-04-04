import React, { useState } from "react";
import '../app.css'

export default function Card(props) {
    const [collapsed, setCollapsed] = useState(!props.isCategory)
    return (
        <div className={`${props.className !== undefined ? props.className : ""} Card`}>
            <h1 style={{ userSelect: "none" }} onClick={() => props.isCategory ? setCollapsed(prev => !prev) : null}>
                {props.title}{props.isCategory ? collapsed ? " -" : " +" : null}
            </h1>
            {collapsed ?
                <div style={props.containerStyle !== undefined ? props.containerStyle : {}}>
                    {props.children}
                </div>
                : null}
        </div>
    )
}
