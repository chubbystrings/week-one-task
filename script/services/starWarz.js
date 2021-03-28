export async function getStarWarzCharacter(url) {
    const response = await fetch(url)
    const responseData = await response.json()
    const { results, next, previous } = responseData
    return {
        results,
        next,
        previous
    }
}