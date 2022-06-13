import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

// Export and declare function plantSeeds. Function will take an array as the parameter.
// Use for..of loop to iterate through the array of the planting plans.
// Use nested for..of loop to iterate through the arrays inside of the planting plan array.
// Use if/else if statements to determine what type of plant is being selected. 
// For each if/else is statement, if the plant matches the name on the conditional, then it should invoke the addPlant function and pass the seed creation function that corresponds to the apporpriate plant.

export const plantSeeds = (PlanArray) => {

    for (const plantArray of PlanArray) {
        for (const plant of plantArray) {

            if (plant === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plant === "Soybean") {
                addPlant(createSoybean())
            } else if (plant === "Sunflower") {
                addPlant(createSunflower())
            } else if (plant === "Wheat") {
                addPlant(createWheat())
            } else if (plant === "Potato") {
                addPlant(createPotato())
            } else if (plant === "Corn") {
                addPlant(createCorn())
            }

        }
    }
}