let growingFieldPlants = []

export const addPlant = (seedObject) => {
    growingFieldPlants.push(seedObject)
}

export const usePlants = () => {
    return growingFieldPlants
}

// export const usePlants = (plantArray) => {
//     return plantArray
// }

// const cornObject = {
//         type: "corn",
//         height: 180,
//         output: 6
//     }

// addPLant(cornObject)
// let plantTest = usePlants(growingFieldPlants)
// console.log(plantTest)