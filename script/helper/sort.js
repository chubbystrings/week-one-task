function compare (a, b) {
    let comparison = 0
    if(a.name > b.name) {
        comparison = 1
    } else if (a.name < b.name) {
        comparison = -1
    }
    return comparison
}
export const alphabetical = data => {
    const alphabet = data.sort(compare)
    return alphabet
}