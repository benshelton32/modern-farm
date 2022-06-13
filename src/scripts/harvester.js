// Export and declare harvestPlants function. The fucntion will take the array of plant seeds planted as the parameter.
// Declare variable for an empty array.
// Use for..of loop to iterate through the array of seed planted taken as the parameter.
// For each object, there is an output proeprty that gives a number signifying how much of the crop that the plant will yield. The function should push that many instancess of the object into the previously declared empty array.
// Use an if/else statement because only half of te corn output will go to the farm.
// If the type property in the object is equal to Corn, use a for loop to iterate through the object. 
// The for loop should run the following conditionals:
//  - Declare i as 0
//  - the loop should run as long as i is less than the number in the output property of the object divided by 2
//  - Increase the value of i with each loop
// The function that should happen with each loop through the object is to push the object into the previosuly declared empty array.
// Use Else to run another for loop for all other plants.
// The for loop should run the following conditionals:
//  - Declare i as 0
//  - the loop should run as long as i is less than the number in the output property of the object
//  - Increase the value of i with each loop
// The function that should happen with each loop through the object is to push the object into the previosuly declared empty array.
// Outside of the initial foor..of loop, the function should return the previously declared, initally empty array.

export const harvestPlants = (plantArray) => {
    let outputArray = []

    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < (plant.output / 2); i++ ) {
                outputArray.push(plant)
            }
        } else { 
            for (let i = 0; i < plant.output; i++ ) {
                outputArray.push(plant)
            }
        }
    }

    return outputArray
}
