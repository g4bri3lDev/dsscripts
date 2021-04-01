export function calcSnk(n, k) {
    n = parseInt(n)
    k = parseInt(k)
    return calcLeft(n, k)
}

export function calcLeft(n, k) {
    if (n > 0 && k === 0) {
        return 0;
    }
    if (k === n) {
        return 1
    }
    return calcLeft(n - 1, k - 1) + k*calcLeft(n - 1, k)}