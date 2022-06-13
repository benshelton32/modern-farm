// Export and declare function called catalog with an array used as the parameter.
// Declare variable to hold the HTML string, but make it an empty string for now.
// Iterate array with for..of loop.
// With each pass through of loop, add string interpolated section for the crop's type to the previously declared empty HTML string in the function.
// Return the HTML string variable

export const catalog = (harvestedCropArray) => {
    let htmlString = ""
    
    for (const crop of harvestedCropArray) {
        htmlString += `<section class="plant">${crop.type}</section>`
    }

    return htmlString
}