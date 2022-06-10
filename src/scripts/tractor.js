import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

// export const plantSeeds = (PlanArray) => {
//     let plantVar = []

//     for (const plantArray of PlanArray) {
//         for (const plant of plantArray) {
//             // let plantVar = {}

//             if (plant === "Asparagus") {
//                 plantVar = createAsparagus()
//             } else if (plant === "Soybean") {
//                 plantVar = createSoybean()
//             } else if (plant === "Sunflower") {
//                 plantVar = createSunflower()
//             } else if (plant === "Wheat") {
//                 plantVar = createWheat()
//             } else if (plant === "Potato") {
//                 plantVar = createPotato()
//             } else if (plant === "Corn") {
//                 plantVar = createCorn()
//             }

//             // return addPlant(plantVar)
//         }
//     }
//     return addPlant(plantVar)
// }

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