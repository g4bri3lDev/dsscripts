import {calcPhi} from "./phi";
const bigInt = require("big-integer")
//wers besser kann solls besser machen
export function ord(n, a) {
    n = parseInt(n)
    a = parseInt(a)
    let p = calcPhi(n)

    let dividers = []
    if (p === 1) {
        return {dividers}
    }
    for(let i=1; i<=p; i++) {
    	if(p % i === 0) {
    		dividers.push(i)
    	}
    }

    let ord = []
	for(let i=0; i<dividers.length; i++) {
        let help = bigInt(a).pow(dividers[i]).mod(n)
        ord.push(help.toJSNumber())
        if(help.toJSNumber() === 1) {
            break
        }
    }
    console.log(ord.length)
    console.log(dividers.length)
    while(ord.length < dividers.length) {
        dividers.pop()
    }
    console.log(ord.length)
    console.log(dividers.length)
    return {ord, dividers}
}
