import Card from "../Card";
import SymbolListItem from "./SymbolListItem";

const symbols = [
    ["Ungleich", "≠"],
    ["Kleiner", "≤"],
    ["Größer", "≥"],
    ["Entspricht", "≙"],
    ["Zu Beweisen", "≟"],
    ["Natürliche Zahlen", "ℕ"],
    ["Ganze Zahlen", "ℤ"],
    ["Rationale Zahlen", "ℚ"],
    ["Reelle Zahlen", "ℝ"],
    ["Komplexe Zahlen", "ℂ"]
];

export default function Allgemein() {

    return (
        <Card title={"Allgemein"}>
            <ul style={{ textAlign: "left", width: "100%", padding: "0" }}>
                {symbols.map((element, index) =>
                    <SymbolListItem key={index} name={element[0]} symbol={element[1]} />
                )}
            </ul>
        </Card>
    )
}
