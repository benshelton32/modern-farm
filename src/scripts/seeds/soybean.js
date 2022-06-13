// Export and declare function createSoybean.
// Declare variable that is equal to an object representing soybean seeds.
// Return the declared variable for the soybean seeds.

export const createSoybean = () => {
    const soybeanObject = {
        type: "Soybean",
        height: 20,
        output: 4
    }

    return soybeanObject
}


// console.log(createSoybean())