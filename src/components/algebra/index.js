import React from "react";
import EEA from "./EEA";
import Gruppen from "./Gruppen";
import OrdFinder from "./OrdFinder";
import KoprimeRestgruppe from "./KoprimeRestgruppe";
import Topic from "../Topic";

export default function Algebra() {
    return (
        <Topic title="Algebra" style={{display: "flex", flexWrap: "wrap"}}>
            <EEA title="EEA:"/>
            <Gruppen title="Gruppen:"/>
            <OrdFinder title="Ordnung finden:"/>
            <KoprimeRestgruppe title="Koprime Restgruppe ℤₙ⃰:"/>
        </Topic>
    )
}
