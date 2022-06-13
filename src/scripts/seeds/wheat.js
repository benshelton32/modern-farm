// Export and declare function createWheat.
// Declare variable that is equal to an object representing wheat seeds.
// Return the declared variable for the wheat seeds.

export const createWheat = () => {
    const wheatObject = {
        type: "Wheat",
        height: 230,
        output: 6
    }

    return wheatObject
}


// console.log(createWheat())