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

export function canBeRealized(sequence) {
    const result = {
        canBeRealized,
        steps: []
    }
    return havelHakimi(convertToArray(sequence), result)
}
