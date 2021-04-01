//Bälle unterscheidbar - Urnen unterscheidbar (injektiv)
//(k!/(k-n)!
export function a2(n, k) {
    n = parseInt(n)
    k = parseInt(k)
    if(k === 0 || n === 0) {
        return 0
    }
    if(n > k) {
        return "n ist größer k -> geht nicht"
    }
    return factorial(k)/factorial(k-n)
}
export function factorial(f) {
    for (let i = f - 1; i > 0 ; i--) {
        f = f * i
    }
    return f
}