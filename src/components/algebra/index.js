import React from "react";
import EEA from "./EEA";
import Phi from "./Phi";
import OrdFinder from "./OrdFinder";
import Topic from "../Topic";

export default function Algebra() {
    return (
        <Topic title="Algebra" style={{display: "flex", flexWrap: "wrap"}}>
            <EEA title="EEA:"/>
            <Phi title="Eulerische Phi Funktion:"/>
            <OrdFinder title="Ordnung finden:"/>
        </Topic>
    )
}