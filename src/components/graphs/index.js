import React from "react";
import Topic from "../Topic";
import GaleShapley from "./GaleShapley";
import GraphProperties from "./GraphProperties";

export default function Combinatorics() {
    return (
        <Topic title="Graphen">
            <GaleShapley title="Gale-Shapley:"/>
            <GraphProperties title="Grapheneigenschaften:"/>
        </Topic>
    )
}