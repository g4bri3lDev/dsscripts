import React from "react";
import Card from "./Card";

export default function Topic({children, title}) {
    return (
        <Card title={title} style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>{children}</Card>
    )
}