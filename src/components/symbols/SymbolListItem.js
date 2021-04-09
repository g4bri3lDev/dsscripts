const pStyle = { margin: "0.25rem" }

export default function SymbolListItem({ name, symbol }) {
    return (
        <ul style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "0", alignItems: "center" }}>
            <p style={pStyle}>
                {name}
            </p>
            <p style={pStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p style={{ ...pStyle, ...{ fontSize: "1.5rem" } }}>
                {symbol}
            </p>
        </ul>
    );
}