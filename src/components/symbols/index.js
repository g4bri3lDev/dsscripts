import Topic from "../Topic";
import Allgemein from "./Allgemein";
import Logik from "./Logik";
import Mengen from "./Mengen";
import Relationen from "./Relationen";

export default function Logic() {
    return (
        <Topic title="Symbole">
            <Allgemein />
            <Mengen />
            <Relationen />
            <Logik />
        </Topic>
    )

}