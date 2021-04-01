import React from "react";
import Card from "./Card";
import '../app.css'

export default function Topic({ children, title }) {
    return (
        <Card className="Topic" title={title} style={{
            backgroundColor: "var(--tertiaryBackgroundColor)",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            userSelect: "none"
        }} isCategory > { children}</Card >
    )
}