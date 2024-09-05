const todaysWeather = "sunny"
const todaysTemp = 20
if (todaysWeather === "rainy" && todaysTemp <= 18) {
    console.log(`Don't forget your umbrella and a jacket`)
} else if (todaysWeather === "sunny") {
    console.log(`Don't forget your sunglasses`)
} else if (todaysWeather === "cloudy") {
    console.log(`Go for a walk with a rain coat`)
} else {
    console.log(`Please check the weather app`)
}