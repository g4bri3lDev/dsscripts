const exponentLUT = ["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];

function numberToSuperscript(n) {
    let s = "";
    while(n > 0) {
        s += exponentLUT[n % 10];
        n = Math.floor(n / 10);
    }
    return s.split("").reverse().join("");
}

export function printPrimeFactors(factors) {
    let s = "";
    if(factors != null) {
        let didFirst = false;
        factors.forEach((exponent, factor) => {
            if(didFirst) {
                s += " · ";
            } else {
                didFirst = true;
            }
            s += `${factor}${numberToSuperscript(exponent)}`;
        })
    }
    return s;
}

export function printMapWithSep(factors, elemSep, kvSep) {
    let s = "";
    if(factors != null) {
        let didFirst = false;
        factors.forEach((exponent, factor) => {
            if(didFirst) {
                s += elemSep;
            } else {
                didFirst = true;
            }
            s += `${factor}${kvSep}${exponent}`;
        })
    }
    return s;
}

export function printArrayWithSep(array, elemSep) {
    let s = "";
    if(array != null) {
        let didFirst = false;
        array.forEach((element) => {
            if(didFirst) {
                s += elemSep;
            } else {
                didFirst = true;
            }
            s += `${element}`;
        })
    }
    return s;
}