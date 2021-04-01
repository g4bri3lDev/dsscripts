import React, {useState} from 'react'
import {allInOne} from "../../functions/combinatorics/allInOne";
import Card from "../Card";
import CheckBox from "../CheckBox";
import DropDown from "../DropDown";
import {inputStyle} from "../../styles";

export default function AllInOne(props) {
	const [n, setN] = useState();
	const [k, setK] = useState();
	const [kugelnUnterscheidbar, setKugelnUnterscheidbar] = useState(false);
	const [urnenUnterscheidbar, setUrnenUnterscheidbar] = useState(false);
	const [bedingung, setBedingung] = useState("beliebig");

	return (
		<Card title={props.title}>
			<input value={n} size="10" onChange={event => setN(parseInt(event.target.value))} type="number" placeholder="n" style={inputStyle}/>
			<input value={k} size="10" onChange={event => setK(parseInt(event.target.value))} type="number" placeholder="k" style={inputStyle}/><br/>
			<CheckBox label="Bälle unterscheidbar" callback={setKugelnUnterscheidbar}/><br/>
			<CheckBox label="Urnen unterscheidbar" callback={setUrnenUnterscheidbar}/><br/>
			<DropDown label="Bedingung" options={["beliebig", "injektiv", "surjektiv", "bijektiv"]} callback={setBedingung}/>
			<br/>
			{allInOne(n, k, kugelnUnterscheidbar, urnenUnterscheidbar, bedingung)}
		</Card>
	)
}
