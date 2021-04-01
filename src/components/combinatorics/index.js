import React from "react";
import Topic from "../Topic";
import GoldenListHead from "./GoldenListHead";
import {ank, bnk, pnk, snk2} from "../../functions/combinatorics/allInOne";
import AllInOne from "./AllInOne";

// TODO: cnk, dnk, enk, fnk, gnk, hnk, sumOfSnk, fact
export default function Combinatorics() {
    return (
        <Topic title="Kombinatorik">
            <AllInOne title ="All-in-one:"/>
            <GoldenListHead title = "Sn,k Rechner:" function={snk2} text =
                {["Bälle unterscheidbar",
                    "Urnen gleich",
                    "mind. 1 Ball pro Urne (surjektiv)"]}/>
            <GoldenListHead title = "Pn,k Rechner:" function={pnk} text =
                {["Bälle gleich",
                "Urnen gleich",
                "mind. 1 Ball pro Urne (surjektiv)"]}/>
            <GoldenListHead title = "Fallende Faktorielle:" function={ank} text =
                {["Bälle unterscheidbar",
                    "Urnen unterscheidbar",
                    "beliebig viele Bälle pro Urne"]}/>
            <GoldenListHead title = "Binomialkoeffizient:" function={bnk} text =
                {["Bälle gleich",
                    "Urnen gleich",
                    "höchstens ein Ball pro Urne (injektiv)"]}/>
        </Topic>
    )
}
