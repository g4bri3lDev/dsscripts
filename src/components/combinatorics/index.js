import React from "react";
import Topic from "../Topic";
import GoldenListHead from "./GoldenListHead";
import {calcPnk} from "../../functions/combinatorics/pnk";
import {calcSnk} from "../../functions/combinatorics/snk";
import {a2} from "../../functions/combinatorics/a2";
import {bino} from "../../functions/combinatorics/bino";

export default function Combinatorics() {
    return (
        <Topic title="Kombinatorik">
            <GoldenListHead title = "Sn,k Rechner:" function={calcSnk} text =
                {["Bälle unterscheidbar",
                    "Urnen gleich",
                    "mind. 1 Ball pro Urne (surjektiv)"]}/>
            <GoldenListHead title = "Pn,k Rechner:" function={calcPnk} text =
                {["Bälle gleich",
                "Urnen gleich",
                "mind. 1 Ball pro Urne (surjektiv)"]}/>
            <GoldenListHead title = "Fallende Faktorielle:" function={a2} text =
                {["Bälle unterscheidbar",
                    "Urnen unterscheidbar",
                    "beliebig viele Bälle pro Urne"]}/>
            <GoldenListHead title = "Binomialkoeffizient:" function={bino} text =
                {["Bälle gleich",
                    "Urnen gleich",
                    "höchstens ein Ball pro Urne (injektiv)"]}/>
        </Topic>
    )
}