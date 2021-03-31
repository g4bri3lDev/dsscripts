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
    let i = 1
    while (i <= p) {
        if (p % i === 0) {
            dividers.push(i)
        }
        i++
    }

    i = 0
    let ord = []
    while (i < dividers.length) {
        let help = bigInt(a).pow(dividers[i]).mod(n)
        ord.push(help.toJSNumber())
        if(help.toJSNumber() === 1) {
            break
        }
        i++
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