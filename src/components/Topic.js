import React from "react";
import Card from "./Card";
import '../app.css'

export default function Topic(props) {
    return (<Card className="Topic" title={props.title} containerStyle={props.containerStyle} isCategory>{props.children}</Card>)
}
