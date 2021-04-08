import {
    createProbabilityMatrix,
    matrixPower,
    matrixSum,
    probabilityMatrixAfterT
} from "../../../functions/graphs/matrixMultiplication";

const id4x4 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]
const matrix1 = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0]
]
const matrix2 = [
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0]
]
describe("matrix multiplication tests", () => {
    describe("matrix by power", () => {
        test("power 0 should be identity matrix", () => {
            expect(matrixPower(matrix1, 0)).toEqual(id4x4)
            expect(matrixPower(matrix2, 0)).toEqual(id4x4)
        })
        test("power 1 should be matrix again", () => {
            expect(matrixPower(matrix1, 1)).toEqual(matrix1)
            expect(matrixPower(matrix2, 1)).toEqual(matrix2)
        })
        test("power of 2", () => {
            expect(matrixPower(matrix1, 2)).toEqual([[2, 0, 2, 1], [1, 1, 2, 1], [0, 1, 1, 1], [1, 0, 0, 0]])
            expect(matrixPower(matrix2, 2)).toEqual([[1, 1, 1, 1], [0, 2, 1, 1], [1, 1, 2, 0], [1, 1, 1, 1]]
            )
        })
        test("power of 3", () => {
            expect(matrixPower(matrix1, 3)).toEqual([[2, 2, 3, 2], [3, 1, 3, 2], [2, 0, 2, 1], [0, 1, 1, 1]])
            expect(matrixPower(matrix2, 3)).toEqual([[1, 3, 3, 1], [2, 2, 3, 1], [1, 3, 2, 2], [1, 3, 3, 1]])
        })
    })
    describe("sum of matrix powers", () => {
        test(">=4", () => {
            expect(matrixSum(matrix1, 4)).toEqual([[10, 5, 12, 8], [9, 6, 12, 8], [5, 3, 7, 4], [3, 1, 4, 3]])
            expect(matrixSum(matrix2, 4)).toEqual([[6, 10, 10, 5], [5, 11, 10, 5], [5, 10, 11, 5], [5, 10, 10, 6]])
        })
    })
    describe("probability matrix", () => {
        test("probability matrix of original", () => {
            expect(createProbabilityMatrix(matrix1)).toEqual([[0, 0.3333333333333333, 0.3333333333333333, 0.3333333333333333], [0.3333333333333333, 0, 0.3333333333333333, 0.3333333333333333], [1, 0, 0, 0], [0, 0, 1, 0]])
            expect(createProbabilityMatrix(matrix2)).toEqual([[0, 0.5, 0.5, 0], [0.5, 0, 0.5, 0], [0, 0.5, 0, 0.5], [0, 0.5, 0.5, 0]])
        })
        test("random surfer after 4 seconds", () => {
            expect(probabilityMatrixAfterT(matrix1, 4)).toEqual([["0.440", "0.126", "0.277", "0.158"], ["0.289", "0.277", "0.277", "0.158"], ["0.378", "0.096", "0.407", "0.119"], ["0.289", "0.067", "0.356", "0.289"]])
            expect(probabilityMatrixAfterT(matrix2, 4)).toEqual([["0.313", "0.288", "0.288", "0.113"], ["0.175", "0.425", "0.288", "0.113"], ["0.113", "0.288", "0.425", "0.175"], ["0.113", "0.288", "0.288", "0.313"]])
        })
    })

})