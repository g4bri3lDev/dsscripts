export function calcPrimes(n) {
    let number = parseInt(n)
    let ret = []
    if (number === 1) {
        return ret
    }
    let t = 2
    while (t * t <= number) {
        if (number % t === 0) {
            ret.push(t)
            number = Math.floor(number / t)
        } else {
            t += 1
        }
    }
    ret.push(number)
    return ret
}

export function calcPhi(n) {
    const primes = calcPrimes(n).filter((v, i, a) => a.indexOf(v) === i)
    let result = parseInt(n)
    for (let i = 0; i < primes.length; i++) {
        result *= (1 - 1 / primes[i])
    }
    return parseInt(result)
}

export function printPhiFormula(n) {
    const primes = calcPrimes(n).filter((v, i, a) => a.indexOf(v) === i)
    let retString = "φ(" + n + ") = " + n
    for (let i = 0; i < primes.length; i++) {
        retString += " · ( 1 - 1/" + primes[i] + ")"
    }
    return retString + " = " + calcPhi(n)
}