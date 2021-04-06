export default function KVMap({grid, setBox}) {
    return (
        <svg viewBox="0 0 250 250" style={{border: "1px solid var(--primaryTextColor)"}}>
            <line x1={75} x2={175} y1={20} y2={20} stroke="var(--primaryTextColor)"/>
            <text x={120} y={15} fill="var(--primaryTextColor)">r</text>
            <line x1={125} x2={225} y1={230} y2={230} stroke="var(--primaryTextColor)"/>
            <text x={170} y={245} fill="var(--primaryTextColor)">t</text>
            <line x1={20} x2={20} y1={75} y2={175} stroke="var(--primaryTextColor)"/>
            <text x={5} y={130} fill="var(--primaryTextColor)">s</text>
            <line x1={230} x2={230} y1={125} y2={225} stroke="var(--primaryTextColor)"/>
            <text x={235} y={180} fill="var(--primaryTextColor)">x</text>
            {grid.map((col, colKey) => {
                return (
                    col.map((row, rowKey) => {
                        return (
                            <rect key={colKey + rowKey} x={25 + 50 * rowKey} y={25 + 50 * colKey} stroke="black"
                                  strokeWidth="0.1" height="50px" width="50px" fill={row ? "black" : "white"}
                                  onClick={() => setBox(colKey, rowKey)}/>
                        )
                    })
                )
            })}
        </svg>
    )
}