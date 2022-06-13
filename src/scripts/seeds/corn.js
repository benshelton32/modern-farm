// Export and declare function createCorn.
// Declare variable that is equal to an array of 2 objects representing corn seeds.
// Return the declared variable for the corn seeds.

export const createCorn = () => {
    const cornObject = [
    {
        type: "Corn",
        height: 180,
        output: 6
    },
    {
        type: "Corn",
        height: 180,
        output: 6
    }
    ]

    return cornObject
}


// console.log(createCorn())