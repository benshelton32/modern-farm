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

// export const harvestPlants = (plantArray) => {
//     let outputArray = []

//         for (const plant of plantArray) {
//         let arrayTest = Array.isArray(plant)

//         if (arrayTest === false) {
//             for (let i = 0; i <= plant.output; i++ ) {
//                 outputArray.push(plant)
//             }
//         } else if (arrayTest === true) {
//             for (const cornArray of plant) {
//                 for (let i = 0; i <= (cornArray.output / 2); i++ ) {
//                 outputArray.push(plant)
//                 }
//             }
//         }
//     }
//     return outputArray
// }

// export const harvestPlants = (plantArray) => {
//     let outputArray = []

//     for (const seedArray of plantArray) {
//         for (const plant of seedArray) {
//             let arrayTest = Array.isArray(plant)

//             if (arrayTest === false) {
//                 for (let i = 0; i <= plant.output; i++ ) {
//                     outputArray.push(plant)
//                 }
//             } else if (arrayTest === true) {
//                 for (const cornArray of plant) {
//                     for (let i = 0; i <= (cornArray.output / 2); i++ ) {
//                     outputArray.push(plant)
//                     }
//                 }
//             }
//         }
//     }

//     return outputArray
// }