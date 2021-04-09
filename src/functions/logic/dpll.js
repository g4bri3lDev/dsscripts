export function parseInput(input) {
    let sections = input.replace(/\s/g, "").split('},{')
    for (let i = 0; i < sections.length; i++) {
        sections[i] = sections[i].replace(/[{}]/g, "")
        sections[i] = sections[i].split(',')
    }
    // console.log(rulePossible(sections));
    return (sections)
}

function toString(array) {
    let arrayCopy = JSON.parse(JSON.stringify(array));
    let output = "{"
    for (let i = 0; i < arrayCopy.length; i++) {
        output += "{" + arrayCopy[i] + "},"
    }

    return output.length === 1 ? output + "}" : output.slice(0, -1) + "}"

}

//BIG TODO negated values are not getting removed
//  let logArray = []

export function dpll(array, logArray) {
    // console.log(logArray)
    // console.log([])
    if (array.length === 0) {
        logArray.push("erfuellbar")
        // console.log("startyay")
        return true
    }
    let i = 0
    while (rulePossible(array).rule && i < 50) {
        let rp = rulePossible(array)
        // console.log({...rp})

        if (rp.olr.length > 0) {
            if (rp.olr[0].includes("-")) {
                if (rp.olr.includes(rp.olr.slice(1))) {
                    // console.log("nope")
                    logArray.push("Nicht erfuellbar: " + rp.olr + " negativ und positiv")
                    return {res: false, log: logArray}
                }
            } else if (rp.olr.includes("-" + rp.olr[0])) {
                // console.log("nope")
                logArray.push("Nicht erfuellbar: " + rp.olr + " negativ und positiv")

                return {res: false, log: logArray}
            } else {
                logArray.push("OLR: " + rp.olr[0] + (rp.olr[0].includes("-") ? ": false" : ": true"))
                // console.log("OLR used: " + rp.olr[0] + rp.olr[0].includes("-") ? ": false" : ": true")
                eliminate(array, rp.olr[0], logArray)
                logArray.push("↓")
                logArray.push(toString(array))

            }

        } else if (rp.plr.length > 0) {
            logArray.push("PLR: " + rp.plr[0] + (rp.plr[0].includes("-") ? ": false" : ": true"))
            // console.log("PLR used: " + rp.plr[0] + rp.plr[0].includes("-") ? ": false" : ": true")
            eliminate(array, rp.plr[0], logArray)
            logArray.push("↓")
            logArray.push(toString(array))

        }
        i++
    }

    if (array.length === 0) {
        logArray.push("erfuellbar")
        // console.log("yayay")
        return {res: true, log: logArray}
    }
    let remaining = getAllLiterals(array)
    // console.logArray("remaining" + remaining)
    if (dpll(eliminate(array, remaining[0]), logArray).res) {
        // console.log("true")
        return {res: true, log: logArray}
    } else {
        // console.log("trying with false")
        return dpll(eliminate(array, "-" + remaining[0]), logArray)
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
                // console.log("{" + array[i] + "} eliminated")
                log.push("{" + array[i] + "} entfernt")
                array.splice(i, 1)
                i = 0
                // console.log("now " + [...array])

            } else if (array[i].includes(variable.slice(1))) {
                // log.push(variable + " eliminated from" + array[i])
                // console.log(variable + " eliminated from {" + [...array[i]] + "}")
                log.push(variable + " entfernt aus {" + [...array[i]] + "}")
                array[i].splice(array[i].indexOf(variable.slice(1)), 1)
                // console.log("now " + [...array[i]])
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
                // console.log("{" + array[i] + "} eliminated")
                log.push("{" + array[i] + "} entfernt")
                array.splice(i, 1)
                i = 0
                // console.log("now " + [...array])

            } else if (array[i].includes("-" + variable)) {
                // log.push(variable + " eliminated from" + array[i])
                // console.log("-" + variable + " eliminated from {" + [...array[i]] + "}")
                log.push("-" + variable + " entfernt aus {" + [...array[i]] + "}")
                array[i].splice(array[i].indexOf("-" + variable), 1)
                // console.log("now " + [...array[i]])

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
    return tmpA.localeCompare(tmpB)
}