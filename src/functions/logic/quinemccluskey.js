function toMinTermBinary(mapArray) {
    let mintermbinary = []
    for (let i = 0; i < mapArray.length; i++) {
        for (let j = 0; j < mapArray[i].length; j++) {
            if (mapArray[i][j]) {
                let r = 0, s = 0, t = 0, x = 0
                // console.log("i: "+i+"j: "+j )
                //R
                if (j === 1 || j === 2) {
                    r = 1
                }
                //S
                if (i === 1 || i === 2) {
                    s = 1
                }
                //T
                if (j === 2 || j === 3) {
                    t = 1
                }
                //X
                if (i === 2 || i === 3) {
                    x = 1
                }
                mintermbinary.push([r, s, t, x, [r, s, t, x].reduce((a, v) => v === 1 ? a + 1 : a, 0), 0, [], parseInt('' + r + s + t + x, 2), [parseInt('' + r + s + t + x, 2)]])
            }
        }
    }
    // console.log(mintermbinary)
    return mintermbinary
}

function toColumn(mapArray) {
    const mintermbinary = toMinTermBinary(mapArray)
    let column0 = [
        [
            [], [], [], [], []
        ]
    ]
    for (let i = 0; i < mintermbinary.length; i++) {
        column0[0][mintermbinary[i][4]].push(mintermbinary[i])
    }
    // console.log(column0)
    return column0
}

function getAllIndexes(arr, val) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

function pairElements(el1, el2) {
    const newVals = [el1[0] === el2[0] ? el1[0] : 2, el1[1] === el2[1] ? el1[1] : 2, el1[2] === el2[2] ? el1[2] : 2, el1[3] === el2[3] ? el1[3] : 2]
    return newVals.concat([newVals.reduce((a, v) => v === 1 ? a + 1 : a, 0), 0, getAllIndexes(newVals, 2), el1[7], el1[8].concat(el2[8])])
}

export function pairing(mapArray) {
    const column = toColumn(mapArray)
    for (let n = 0; n < column.length; n++) {
        for (let i = 0; i < column[n].length - 1; i++) {
            for (let j = 0; j < column[n][i].length; j++) {
                for (let k = 0; k < column[n][i + 1].length; k++) {
                    // console.log("yay")
                    if (column[n][i + 1][k][7] > column[n][i][j][7]
                        && column[n][i][j][6].every((val, index) => val === column[n][i + 1][k][6][index])
                        && Math.log2(column[n][i + 1][k][7] - column[n][i][j][7]) % 1 === 0) {
                        column[n][i + 1][k][5] = 1
                        column[n][i][j][5] = 1
                        // console.log(column[n][i][j])
                        // console.log("equal")
                        // console.log(column[n][i + 1][k])
                        if (column[n + 1] === undefined) {
                            column.push([
                                [], [], [], []
                            ])
                        }
                        let el = pairElements(column[n][i][j], column[n][i + 1][k])
                        column[n + 1][el[4]].push(el)
                    }
                }
            }
        }
    }
    return column
}

const sortNums = (arr) => {
    return arr.sort((a, b) => a - b)
}


function alreadyContains(array, object) {
    const obj = sortNums(object[8])
    for (let i = 0; i < array.length; i++) {
        let sortedArray = sortNums(array[i][0][8])
        let same = true
        for (let j = 0; j < array[i][0][8].length; j++) {
            if (sortedArray[j] !== obj[j]) {
                same = false
            }
        }
        if (same === true) {
            return true
        }
    }
    return false
}

function genPIArray(mapArray) {
    const column = pairing(mapArray)
    let PIArray = []
    let numberCounter = {}
    for (let n = 0; n < column.length; n++) {
        for (let i = 0; i < column[n].length; i++) {
            for (let j = 0; j < column[n][i].length; j++) {
                if (column[n][i][j][5] === 0 && !alreadyContains(PIArray, column[n][i][j])) {
                    for (let k = 0; k < column[n][i][j][8].length; k++) {
                        let property = column[n][i][j][8][k].toString()
                        if (!numberCounter.hasOwnProperty(property)) {
                            numberCounter[property] = 1

                        }
                        numberCounter[property] += 1
                    }
                    PIArray.push([column[n][i][j], [n, i, j]])
                }
            }
        }
    }
    // console.log(PIArray)
    // console.log(numberCounter)
    return {PIArray, numberCounter}
}

function invertMapArray(mapArray) {
    let inverted = JSON.parse(JSON.stringify(mapArray));
    for (let i = 0; i < inverted.length; i++) {
        for (let j = 0; j < inverted[0].length; j++) {
            inverted[i][j] = !inverted[i][j]
        }
    }
    return inverted
}

export function printDNF(mapArray) {
    const piArray = genPIArray(mapArray).PIArray
    let DNFString = ''
    for (let i = 0; i < piArray.length; i++) {
        DNFString += "( " + (piArray[i][0][0] === 1 ? "R" : piArray[i][0][0] === 0 ? "¬R" : "") + (piArray[i][0][1] === 1 ? "S" : piArray[i][0][1] === 0 ? "¬S" : "") + (piArray[i][0][2] === 1 ? "T" : piArray[i][0][2] === 0 ? "¬T" : "") + (piArray[i][0][3] === 1 ? "X" : piArray[i][0][3] === 0 ? "¬X" : "") + " ) ∨ "
    }
    return DNFString.slice(0, -3)
}

export function printKNF(mapArray) {
    const piArray = genPIArray(invertMapArray(mapArray)).PIArray
    let KNFString = ''
    for (let i = 0; i < piArray.length; i++) {
        KNFString += "( " + (piArray[i][0][0] === 1 ? "¬R" : piArray[i][0][0] === 0 ? "R" : "") + (piArray[i][0][1] === 1 ? "¬S" : piArray[i][0][1] === 0 ? "S" : "") + (piArray[i][0][2] === 1 ? "¬T" : piArray[i][0][2] === 0 ? "T" : "") + (piArray[i][0][3] === 1 ? "¬X" : piArray[i][0][3] === 0 ? "X" : "") + " ) ^ "
    }
    return KNFString.slice(0, -3)
}