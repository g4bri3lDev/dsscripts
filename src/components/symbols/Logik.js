import Card from "../Card";
import SymbolListItem from "./SymbolListItem";

const symbols = [
    ["UND", "∧"],
    ["ODER", "∨"],
    ["Nicht", "¬"],
    ["Tilde", "~"],
    ["XOR / Exklusives Oder", "⊕"],
    ["Implikation", "→ / ⇒"],
    ["Genau dann wenn (gdw) / Doppelte Implikation", "↔ / ⇔"],
    ["Für alle", "∀"],
    ["Es existiert", "∃"],
    ["Es existiert nicht", "∄"],
    ["Es existiert genau ein", "∃!"],
];

export default function Logik() {

    return (
        <Card title={"Logik"}>
            <ul style={{ textAlign: "left", width: "100%", padding: "0" }}>
                {symbols.map((element, index) =>
                    <SymbolListItem key={index} name={element[0]} symbol={element[1]} />
                )}
            </ul>
        </Card>
    )
}
