export function parseInput(input) {
    let sections = input.replace(/\s/g, "").split('},{')
    for (let i = 0; i < sections.length; i++) {
        sections[i] = sections[i].replace(/[{}]/g, "")
        sections[i] = sections[i].split(',')
    }
    // console.log(rulePossible(sections));
    return (sections)
}

//BIG TODO negated values are not getting removed
let log = []

export function dpll(array) {
    if (array.length === 0) {
        console.log("startyay")
        return true
    }
    let i = 0
    while (rulePossible(array).rule && i < 50) {
        let rp = rulePossible(array)
        console.log({...rp})

        if (rp.olr.length > 0) {
            if (rp.olr[0].includes("-")) {
                if (rp.olr.includes(rp.olr.slice(1))) {
                    console.log("nope")
                    return false
                }
            } else if (rp.olr.includes("-" + rp.olr[0])) {
                console.log("nope")
                return false
            } else {
                console.log("OLR used: " + rp.olr[0])
                eliminate(array, rp.olr[0], log)

            }

        } else if (rp.plr.length > 0) {
            console.log("PLR used: " + rp.plr[0])
            eliminate(array, rp.plr[0], log)
        }
        i++
    }

    if (array.length === 0) {
        console.log("yayay")
        return true
    }
    let remaining = getAllLiterals(array)
    // console.log("remaining" + remaining)
    if (dpll(eliminate(array, remaining[0]))) {
        console.log("true")
        return true
    } else {
        console.log("trying with false")
        return dpll(eliminate(array, "-" + remaining[0]))
    }

}

function getAllLiterals(array) {
    let literals = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (!literals.includes(array[i][j])) {
                literals.push(array[i][j])
            }

        }
    }
    return literals.sort(compareLiterals)
}

function eliminate(array, variable, log) {
    if (variable.includes("-")) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes(variable)) {
                // log.push(array[i] + " eliminated")
                console.log("{" + array[i] + "} eliminated")
                array.splice(i, 1)
                i = 0
                // console.log("now " + [...array])
                continue
            }
            if (array[i].includes(variable.slice(1))) {
                // log.push(variable + " eliminated from" + array[i])
                console.log(variable + " eliminated from {" + [...array[i]] + "}")
                array[i].splice(array[i].indexOf(variable.slice(1)), 1)
                console.log("now " + [...array[i]])
                if (array[i].length === 0) {
                    array.splice(i, 1)
                }
                i = 0
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes(variable)) {
                // log.push(array[i] + " eliminated")
                console.log("{" + array[i] + "} eliminated")
                array.splice(i, 1)
                i = 0
                // console.log("now " + [...array])
                continue
            }
            if (array[i].includes("-" + variable)) {
                // log.push(variable + " eliminated from" + array[i])
                console.log("-" + variable + " eliminated from {" + [...array[i]] + "}")
                array[i].splice(array[i].indexOf("-" + variable), 1)
                console.log("now " + [...array[i]])

                if (array[i].length === 0) {
                    array.splice(i, 1)
                }
                i = 0
            }
        }
    }
    return array
}


function rulePossible(array) {
    let OLRLiteralList = []
    let PLRLiteralList = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === 1) {
            if (!OLRLiteralList.includes(array[i][0]))
                OLRLiteralList.push(array[i][0])
            // return {
            //     rule: true,
            //     olr: [array[i][0]],
            //     plr: null
            // }
        }
        //TODO refactor with includes()
        for (let j = 0; j < array[i].length; j++) {
            // console.log([...PLRLiteralList])
            if (!PLRLiteralList.includes(array[i][j])) {
                // console.log("first if")
                if (array[i][j].includes("-")) {
                    // console.log("negative val")
                    // console.log(array[i][j].slice(1))
                    if (PLRLiteralList.includes(array[i][j].slice(1))) {
                        // console.log("includes negative")
                        PLRLiteralList.splice(PLRLiteralList.indexOf(array[i][j].slice(1)), 1)
                    } else {
                        PLRLiteralList.push(array[i][j])
                    }
                } else if (PLRLiteralList.includes("-" + array[i][j])) {
                    // console.log("includes positive")
                    PLRLiteralList.splice(PLRLiteralList.indexOf("-" + array[i][j]), 1)
                } else {
                    // console.log("push")
                    PLRLiteralList.push(array[i][j])
                }
            }


        }
    }
    // console.log(PLRLiteralList)
    return {
        rule: PLRLiteralList.length > 0 || OLRLiteralList.length > 0,
        olr: OLRLiteralList.sort(compareLiterals),
        plr: PLRLiteralList.sort(compareLiterals)
    };

}

function compareLiterals(a, b) {
    const tmpA = a.includes("-") ? a.slice(1) : a
    const tmpB = b.includes("-") ? b.slice(1) : b
    // console.log(tmpA,tmpB)
    // return tmpA < tmpB ? -1 : (tmpA > tmpB ? 1 : 0)
    return tmpA.localeCompare(b)
}