function isAlreadySorted(list) {
    if (list.length === 1) {
        return true
    }
    for (let i = 1; i < list.length; i++) {
        if (list[i - 1] > list[i]) {
            return false
        }
    }
    return true
}

function convertToArray(sequence) {
    return sequence.replace(/\s/g, "").split(',')
}

function convertToSequence(array) {
    return "( " + array.join(", ") + " )"
}

function havelHakimi(sequenceArray, result) {
    if (sequenceArray.length < 1 || sequenceArray.every(el => parseInt(el) === 0)) {
        result.canBeRealized = true
        result.steps.push("Graph ist realisierbar ✅")
        return result
    }
    if (!isAlreadySorted(sequenceArray)) {
        result.steps.push(convertToSequence(sequenceArray) + " -sortiert-> " + convertToSequence(sequenceArray.sort((a, b) => a - b)))
        sequenceArray = sequenceArray.sort((a, b) => a - b)
    }
    if (sequenceArray[sequenceArray.length - 1] > sequenceArray.length - 1 || sequenceArray.some(el => el < 0)) {
        result.canBeRealized = false
        result.steps.push("Graph ist nicht realisierbar ❌")
        return result
    }
    let before = [...sequenceArray]
    let lastElement = parseInt(sequenceArray.pop())
    for (let i = sequenceArray.length - 1; i > sequenceArray.length - lastElement - 1; i--) {
        sequenceArray[i] -= 1
    }
    result.steps.push(convertToSequence(before) + " -Havel-Hakimi-> " + convertToSequence(sequenceArray))
    return havelHakimi(sequenceArray, result)

}

export async function canBeRealized(sequence) {
    const result = {
        canBeRealized,
        steps: []
    }
    return havelHakimi(convertToArray(sequence), result)
}

export function handshakingLemma(sequence) {
    let result = {
        vertices: 0,
        edges: 0,
        steps: []

    }
    const sequenceArray = convertToArray(sequence)
    result.vertices = sequenceArray.length
    result.edges = sequenceArray.reduce((a, b) => parseInt(a) + parseInt(b), 0) / 2
    result.steps.push("|V| = " + result.vertices)
    result.steps.push("Σv∈V deg(v) = 2 |E|")
    result.steps.push("|E| = (" + sequence.replaceAll(",", " + ") + ") / 2 = " + result.edges)
    return result
}

export function createGraphFromSequence(sequence) {
    let sequenceArray = convertToArray(sequence).sort((a, b) => a - b)
    let result = {
        nodes: [],
        links: []
    }

    sequenceArray = sequenceArray.map((node, index) => {
        return {id: index, degree: parseInt(node)}
    })
    result.nodes = [...sequenceArray]

    while (sequenceArray.length > 0) {
        let steps = sequenceArray[sequenceArray.length - 1].degree
        for (let i = 1; i <= steps; i++) {
            result.links.push({
                source: sequenceArray[sequenceArray.length - 1].id,
                target: sequenceArray[sequenceArray.length - 1 - i].id
            })
            sequenceArray[sequenceArray.length - 1 - i].degree -= 1
        }
        sequenceArray.pop()
        sequenceArray.filter(el => el.degree !== 0)
        sequenceArray.sort((a, b) => a.degree - b.degree)

    }

    return result
}