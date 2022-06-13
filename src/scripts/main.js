console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

// Create variable and set equal to createPLan function.
// Console log variable to check output.

const yearlyPlan = createPlan()
console.log("Yearly Plan", yearlyPlan)

// Create variable and set equal to createCorn fucntion.
// Console log variable to check output.

const cornSeed = createCorn()
console.log("Corn", cornSeed)

// Create variable and set equal to createSoybean fucntion.
// Console log variable to check output.

const soybeanSeed = createSoybean()
console.log("Soybean", soybeanSeed)

// Create variable and set equal to createSunflower fucntion.
// Console log variable to check output.

const sunflowerSeed = createSunflower()
console.log("Sunflower", sunflowerSeed)

// Create variable and set equal to createAsparagus fucntion.
// Console log variable to check output.

const asparagusSeed = createAsparagus()
console.log("Asparagus", asparagusSeed)

// Create variable and set equal to createWheat fucntion.
// Console log variable to check output.

const wheatSeed = createWheat()
console.log("Wheat", wheatSeed)

// Create variable and set equal to createPotato fucntion.
// Console log variable to check output.

const potatoSeed = createPotato()
console.log("Potato", potatoSeed)

// Create variable and set equal to plantSeeds functions. User previosuly defined variable for the crop plan as argument.
// Create variable and set equal to usePlants function.
// Console log the declared variable for usePlants function to check output. 

let plantingPlan = plantSeeds(yearlyPlan)
let plantArray = usePlants()

console.log("plantArray", plantArray)

// Create variable and set equal to the harvestPlants function with the previously declared variable for the usePlants function passed through as the argument.
// Console log the variable to check output.

let harvestArray = harvestPlants(plantArray)
console.log("Harvest", harvestArray)

// Declare variable and set equal to selecting the "container" class in the index.html page using document.querySelector.
// Use .innerHTML on previously declared variable and declare the value as the catalog function with the previously declared variable for the harvestPlants function passed as an argument.

const harvestHTMLElement = document.querySelector(".container")
harvestHTMLElement.innerHTML = catalog(harvestArray)
