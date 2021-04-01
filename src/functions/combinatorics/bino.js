//n!/(k!*(n-k)!
export function bino(n, k) {
    n = parseInt(n)
    k = parseInt(k)
    return factorial(n)/(factorial(k)*factorial(n-k))
}
export function factorial(f) {
    for (let i = f - 1; i > 0 ; i--) {
        f = f * i
    }
    return f
}