import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (PlanArray) => {
    for (const plantArray of PlanArray) {
        for (const plant of plantArray) {
            let plantVar = {}

            if (plant === "Asparagus") {
                plantVar = createAsparagus()
            } else if (plant === "Soybean") {
                plantVar = createSoybean()
            } else if (plant === "Sunflower") {
                plantVar = createSunflower()
            } else if (plant === "Wheat") {
                plantVar = createWheat()
            } else if (plant === "Potato") {
                plantVar = createPotato()
            } else if (plant === "Corn") {
                plantVar = createCorn()
            }

            return addPlant(plantVar)
        }
    }
}