export function calcPnk(n, k) {
    n = parseInt(n)
    k = parseInt(k)
    return calcLeft(n, k)
}

export function calcLeft(n, k) {
    if (k > n || k === 0) {
        return 0;
    }
    if (k === n) {
        return 1
    }
    return calcLeft(n - 1, k - 1) + calcLeft(n - k, k)
}