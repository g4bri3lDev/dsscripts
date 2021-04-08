import React from "react";

export default function Matrix({data, setData, editable}) {
    return (
        <table>
            <tbody>
            {data ? data.map((col, colID) =>
                <tr key={colID}>
                    {col.map((row, rowID) =>
                        <td key={rowID}>
                            <input style={{minWidth: 25, maxWidth: 50}} type="number" value={row}
                                   onChange={event => {
                                       let newData = [...data];
                                       newData[colID][rowID] = parseInt(event.target.value);
                                       setData(newData)
                                   }} disabled={!editable}/>
                        </td>
                    )}
                </tr>
            ) : null}
            </tbody>
        </table>
    )
}