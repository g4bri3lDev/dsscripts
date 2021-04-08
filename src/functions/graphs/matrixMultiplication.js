const id4x4 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]

function multiplyMatrix(m1, m2) {
    let result = new Array(4).fill(0).map(() => new Array(4).fill(0))
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m2.length; j++) {
            let sum = 0
            for (let k = 0; k < m1[i].length; k++) {
                sum = sum + m1[i][k] * m2[k][j]
            }
            result[i][j] = sum
        }
    }
    return result
}

function multiplyMatrixWithValue(matrix, value) {
    let result = new Array(4).fill(0).map(() => new Array(4).fill(0))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result[i][j] = (matrix[i][j] * parseFloat(value)).toFixed(3)
        }
    }
    return result
}

export function matrixPower(matrix, power) {
    if (parseInt(power) === 0) {
        return id4x4
    }
    let tmp = JSON.parse(JSON.stringify(matrix));
    for (let i = 1; i < power; i++) {
        tmp = multiplyMatrix(tmp, matrix)
    }
    return tmp

}

function matrixAddition(m1, m2) {
    let result = new Array(4).fill(0).map(() => new Array(4).fill(0))
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[0].length; j++) {
            result[i][j] = m1[i][j] + m2[i][j]
        }
    }
    return result
}

export function matrixSum(matrix, n) {
    if (parseInt(n) === 0) {
        return id4x4
    } else {
        return matrixAddition(matrixPower(matrix, n), matrixSum(matrix, n - 1))
    }
}

export function createProbabilityMatrix(matrix) {
    let result = new Array(4).fill(0).map(() => new Array(4).fill(0))
    for (let i = 0; i < matrix.length; i++) {
        let numOfConnections = matrix[i].reduce((a, v) => v !== 0 ? a + 1 : a, 0)
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] !== 0) {
                result[i][j] = (1 / numOfConnections)
            }
        }
    }
    return result
}

export function probabilityMatrixAfterT(matrix, t) {
    // return multiplyMatrixWithValue(matrix,t)
    return multiplyMatrixWithValue(matrixSum(createProbabilityMatrix(matrix), t), (1 / (parseInt(t) + 1)))
}