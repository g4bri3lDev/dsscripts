import React from "react";
import Topic from "../Topic";
import GoldenListHead from "./GoldenListHead";
import {ank, bnk, cnk, dnk, enk, fnk, gnk, hnk, pnk, snk2, fact, sumOfSnk} from "../../functions/combinatorics/allInOne";
import AllInOne from "./AllInOne";

// TODO: cnk, dnk, enk, fnk, gnk, hnk, sumOfSnk, fact
export default function Combinatorics(props) {
    return (
        <Topic title="Kombinatorik" containerStyle={{flexDirection: "column"}}>
            <AllInOne title ="All-in-one:"/>
            <Topic title="Beliebig viele Bälle pro Urne (beliebig)">
            	<GoldenListHead title="n^k Rechner:" function={Math.pow} text={[
            		"Bälle unterscheidbar",
            		"Urnen unterscheidbar",
					"Beispiel Aufgabenstellung: |{(s1,...,s5) ∈ [6]^5}|",
                    "Mit Zurücklegen",
                    "Reihenfolge relevant"
            	]}/>
            	<GoldenListHead title="Cn,k Rechner:" function={cnk} text={[
            		"Bälle gleich",
            		"Urnen unterscheidbar",
					"Bsp. Aufgabenstellung: |{(s1,...,s13) ∈ N| s1 + ... s13 = 17}| n = 13 k = 4",
					"Bsp. Aufgabenstellung: |{( |f^-1(1)| ,..., |f^-1(13)| )| f: [17] -> [13]}| n = 13 k = 17"
            	]}/>
				<GoldenListHead title="sum(Sn,k) Rechner:" function={sumOfSnk} text={[
            		"Bälle unterscheidbar",
            		"Urnen gleich"
            	]}/>
				<GoldenListHead title="Hn,k Rechner:" function={hnk} text={[
            		"Bälle gleich",
            		"Urnen gleich"
            	]}/>
            </Topic>
            <Topic title="Höchstens ein Ball pro Urne (injektiv)">
                <GoldenListHead title="An,k Rechner:" function={ank} text={[
                    "Bälle unterscheidbar",
                    "Urnen unterscheidbar",
                    "Bsp. Aufgabenstellung: {(s1,...,sk) ∈ [n]^k | |{s1,...,sk}| = k}",
                    "Ohne Zurücklegen",
                    "Reihenfolge relevant"
                ]}/>
                <GoldenListHead title="Bn,k Rechner:" function={bnk} text={[
                    "Bälle gleich",
                    "Urnen unterscheidbar",
                    "Bsp. Aufgabenstellung: {(s1,...,sk) ∈ [n]^k | s1 < ... < sk}",
                    "Ohne Zurücklegen",
                    "Reihenfolge irrelevant"
                ]}/>
            </Topic>
            <Topic title="Mindestens ein Ball pro Urne (surjektiv)">
                <GoldenListHead title="Fn,k Rechner:" function={fnk} text={[
                    "Bälle unterscheidbar",
                    "Urnen unterscheidbar",
                    "Bsp. Aufgabenstellung: {(s1,...,sk) ∈ [n]^k | |{s1,...,sk}| = n}"
                ]}/>
                <GoldenListHead title="Gn,k Rechner:" function={gnk} text={[
                    "Bälle gleich",
                    "Urnen unterscheidbar",
                    "{(s1,...,sk) ∈ ℕ^k |s1 + ... + sk = n} - ohne die Null"
                ]}/>
                <GoldenListHead title="Sn,k Rechner:" function={snk2} text={[
                    "Bälle unterscheidbar",
                    "Urnen gleich"
                ]}/>
                <GoldenListHead title="Pn,k Rechner:" function={pnk} text={[
                    "Bälle gleich",
                    "Urnen gleich"
                ]}/>
            </Topic>
            <Topic title="Genau ein Ball pro Urne (bijektiv)">
                <GoldenListHead title="Factorial" function={fact} text={[
                    "Bälle unterscheidbar",
                    "Urnen unterscheidbar"
                ]}/>
            </Topic>
            <Topic title="Sonstige">
                <GoldenListHead title="Dn,k" function={dnk} text = {[
                    "Bälle gleich",
                    "Urnen unterscheidbar",
                    "{(s1,...,sk) ∈ ℕ0^k |s1 + ... + sk = n} mit ℕ0",
                    "Mit Zurücklegen",
                    "Reihenfolge irrelevant"
                    ]}/>
                <GoldenListHead title="En,k" function={enk}/>
            </Topic>
        </Topic>
    )
}
