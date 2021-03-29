export function eea(a, b) {
    let solution = []
        solution.push({
            a: parseInt(a) < parseInt(b) ? a : b,
            b: parseInt(b) > parseInt(a) ? b : a
        })
    let i = 0

    while (solution[i].b % solution[i].a !== 0) {
        solution[i].modulo = Math.floor(solution[i].b / solution[i].a)
        solution.push({a: solution[i].b % solution[i].a, b: solution[i].a})
        i++
    }
    // solution[i].modulo = Math.floor(solution[i].b / solution[i].a)
    solution[i].modulo = "-"
    solution[i].alpha = 1
    solution[i].beta = 0
    while (i > 0) {
        i--
        solution[i].alpha = solution[i + 1].beta - solution[i].modulo * solution[i + 1].alpha
        solution[i].beta = solution[i + 1].alpha
    }

    return solution
}
export function ggt(a,b,alpha,beta){
    return alpha*a+beta*b
}