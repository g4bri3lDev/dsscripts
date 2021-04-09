import Card from "../Card";
import SymbolListItem from "./SymbolListItem";

const symbols = [
    ["Schnittmenge", "⋂"],
    ["Vereinigungsmenge", "⋃"],
    ["Leere Menge", "∅"],
    ["Element von", "∈"],
    ["Kein Element von", "∉"],
    ["Symmetrische Differenz", "∆"],
    ["Differenz / Ohne", "∖"],
    ["Teilmenge", "⊆"],
    ["Echte Teilmenge", "⊂"],
    ["Keine Teilmenge", "⊄"],
    ["Kartesisches Produkt", "×"],
    ["Alphabet", "Σ"],
    ["Leeres Wort", "ε"],
    ["Natürliche Zahlen", "ℕ"],
    ["Ganze Zahlen", "ℤ"],
    ["Rationale Zahlen", "ℚ"],
    ["Reelle Zahlen", "ℝ"],
    ["Komplexe Zahlen", "ℂ"]
];

export default function Mengen() {

    return (
        <Card title={"Mengen"}>
            <ul style={{ textAlign: "left", width: "100%", padding: "0" }}>
                {symbols.map((element, index) =>
                    <SymbolListItem key={index} name={element[0]} symbol={element[1]} />
                )}
            </ul>
        </Card>
    )
}
