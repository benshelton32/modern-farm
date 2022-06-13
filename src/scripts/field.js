// Define a variable for an empty array

let growingFieldPlants = []

// Export and declare function addPlant. Function should take a seed object as the parameter.
// Declare variable and set it equal to the value of Array.isArray of the seed object passed through as an argument.
// Use an if..else statement to test the seed object being passed as the argument.
// If the variable for the Array.isArray is true, then the objects in the array should be pushed to the previously declared empty array variable. Use .push method to push the objects at indexes 0 and 1 into the aforementioned empty array.
// All other seed objects should not be in arrays. Use Else to push the seed object intot he empty array previously declared.

export const addPlant = (seedObject) => {
    let arrayTest = Array.isArray(seedObject)

    if (arrayTest === true) {
        growingFieldPlants.push(seedObject[0])
        growingFieldPlants.push(seedObject[1])
    } else {
        growingFieldPlants.push(seedObject)
    }
}

// Export and declare function usePlants.
// Function will return the previously declared variable that represents the empty array that is filled by addPlant function.

export const usePlants = () => {
    return growingFieldPlants
}
