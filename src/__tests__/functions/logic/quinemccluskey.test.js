import {printDNF, printKNF} from "../../../functions/logic/quinemccluskey";

const nothing = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]
const input1 = [
    [false, true, true, true],
    [false, false, false, false],
    [false, false, false, false],
    [true, false, false, false]
]
const input2 = [
    [true, false, false, false],
    [true, true, true, true],
    [true, true, true, true],
    [false, true, true, true]
]
const input3 = [
    [false, false, false, false],
    [false, true, true, false],
    [false, true, true, false],
    [false, false, false, false]
]
const full = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]
]
describe("function should calculate dnf and knf correctly", () => {
    describe('dnf functions', () => {
        test("no field selected", () => {
            const output = ""
            expect(printDNF(nothing)).toEqual(output)
        })
        test("test1", () => {
            const output = "( ¬R¬S¬TX ) ∨ ( R¬S¬X ) ∨ ( ¬ST¬X )"
            expect(printDNF(input1)).toEqual(output)
        })
        test("test2", () => {
            const output = "( ¬R¬T¬X ) ∨ ( RX ) ∨ ( TX ) ∨ ( S )"
            expect(printDNF(input2)).toEqual(output)
        })
        test("test3", () => {
            const output = "( RS )"
            expect(printDNF(input3)).toEqual(output)
        })
        test("all field selected", () => {
            const output = "(  )"
            expect(printDNF(full)).toEqual(output)
        })
    })
    describe('knf functions', () => {
        test("no field selected", () => {
            const output = "(  )"
            expect(printKNF(nothing)).toEqual(output)
        })
        test("test1", () => {
            const output = "( RTX ) ^ ( ¬R¬X ) ^ ( ¬T¬X ) ^ ( ¬S )"
            expect(printKNF(input1)).toEqual(output)
        })
        test("test2", () => {
            const output = "( RST¬X ) ^ ( ¬RSX ) ^ ( S¬TX )"
            expect(printKNF(input2)).toEqual(output)
        })
        test("test3", () => {
            const output = "( S ) ^ ( R )"
            expect(printKNF(input3)).toEqual(output)
        })
        test("all field selected", () => {
            const output = ""
            expect(printKNF(full)).toEqual(output)
        })
    })
})