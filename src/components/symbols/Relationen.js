import Card from "../Card";
import SymbolListItem from "./SymbolListItem";

const symbols = [
    ["Äquivalenz / Identität", "≡"],
    ["Funktionskomposition", "∘"],
    ["Ist Vorgänger von", "≺"],
    ["Aus x folgt nicht", "⊀"],
    ["Ist Nachfolger von", "≻"],
    ["Folgt nicht aus", "⊁"],
    ["Ist Vorgänger von oder gleich", "⪯"],
    ["Ist Nachfolger von oder gleich", "⪰"],
];

export default function Relationen() {

    return (
        <Card title={"Relationen"}>
            <ul style={{ textAlign: "left", width: "100%", padding: "0" }}>
                {symbols.map((element, index) =>
                    <SymbolListItem key={index} name={element[0]} symbol={element[1]} />
                )}
            </ul>
        </Card>
    )
}
