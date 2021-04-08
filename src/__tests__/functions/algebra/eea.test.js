import {eea} from "../../../functions/algebra/eea";

describe('eea function should return data for table correctly', () => {
    describe('value position should not matter', () => {
        const result = [{"a": 76, "alpha": 12, "b": 911, "beta": -1, "modulo": 11}, {
            "a": 75,
            "alpha": -1,
            "b": 76,
            "beta": 1,
            "modulo": 1
        }, {"a": 1, "alpha": 1, "b": 75, "beta": 0, "modulo": "-"}]
        test("a=76 b=911", () => {
            expect(eea(76, 911)).toEqual(result)
        })
        test("a=911 b=76", () => {
            expect(eea(911, 76)).toEqual(result)
        })
    })
    describe('other values', () => {
        test("a= 935 b=1491", () => {
            expect(eea(934, 1491)).toEqual([{"a": 934, "alpha": 439, "b": 1491, "beta": -275, "modulo": 1}, {
                "a": 557,
                "alpha": -275,
                "b": 934,
                "beta": 164,
                "modulo": 1
            }, {"a": 377, "alpha": 164, "b": 557, "beta": -111, "modulo": 1}, {
                "a": 180,
                "alpha": -111,
                "b": 377,
                "beta": 53,
                "modulo": 2
            }, {"a": 17, "alpha": 53, "b": 180, "beta": -5, "modulo": 10}, {
                "a": 10,
                "alpha": -5,
                "b": 17,
                "beta": 3,
                "modulo": 1
            }, {"a": 7, "alpha": 3, "b": 10, "beta": -2, "modulo": 1}, {
                "a": 3,
                "alpha": -2,
                "b": 7,
                "beta": 1,
                "modulo": 2
            }, {"a": 1, "alpha": 1, "b": 3, "beta": 0, "modulo": "-"}])
        })
    })
    describe('==0 should return empty array', () => {
        test('0 input', () => {
            expect(eea(0, 0)).toEqual([])
        })
    })
})