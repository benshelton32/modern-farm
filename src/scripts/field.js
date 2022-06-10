let growingFieldPlants = []

export const addPlant = (seedObject) => {
    let arrayTest = Array.isArray(seedObject)

    if (arrayTest === true) {
        growingFieldPlants.push(seedObject[0])
        growingFieldPlants.push(seedObject[1])
        console.log("plants array", growingFieldPlants)
    } else {
        growingFieldPlants.push(seedObject)
        console.log(seedObject, growingFieldPlants)
    }
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