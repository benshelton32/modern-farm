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

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const cornSeed = createCorn()
console.log(cornSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

let plantingPlan = plantSeeds(yearlyPlan)
let plantArray = usePlants()

console.log("plantArray", plantArray)

let harvestArray = harvestPlants(plantArray)
console.log(harvestArray)


// const cornObject = {
//         type: "corn",
//         height: 180,
//         output: 6
//     }

// let testArray = addPlant(cornObject)
// let plantTest = usePlants()
// console.log(plantTest)