function gcd(a, b) {
    while(a !== b) {
        if(a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

export function lcmm(values) {
    let result = 1;
    for(let i=0; i<values.length; i++) {
        result = lcm(result, values[i]);
    }
    return result;
}

export function primeFactors(n) {
    const factors = new Map();
    if(n === 1) factors.set(1, 1);
    else {
        let divisor = 2;
        while (n >= 2) {
            if (n % divisor === 0) {
                factors.set(divisor, factors.has(divisor) ? factors.get(divisor)+1 : 1)
                n = n / divisor;
            } else {
                divisor++;
            }
        }
    }
    return factors;
}

export function calcGroup(n) {
    let factors = primeFactors(n);
    let result = [];
    outer:
    for (let i=0; i<n; i++) {
        for (const factor of factors.keys()) {
            if(i % factor === 0) {
                continue outer;
            }
        }
        result.push(i);
    }
    return result;
}

function calcElemGroup(a,n) {
    let result = [];
    for(let i=1; i<=n; i++) {
        let x = (result.length > 0 ? a * result[i-2] : a * a) % n;
        //let x = Math.pow(a, i)%n;
        result.push(x)
        if(x === 1) break;
    }
    return result;
}

export function calcElemGroups(group, n) {
    let result = [];
    for(let i=0; i<group.length; i++) {
        result[i] = calcElemGroup(group[i], n);
    }
    return result;
}

export function isCyclic(n, factors) {
    if(n !== null && factors !== null) {
        return n === 2 || n === 4 || (factors.size === 1 && !factors.has(2)) || (factors.size === 2 && factors.has(2) && factors.get(2) === 1);
    } else return false;
}