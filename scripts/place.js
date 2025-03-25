// Define static values for temperature and wind speed
const temperature = 32; // temperature in Fahrenheit
const windSpeed = 10;   // wind speed in miles per hour

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    return (35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Calculate the wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Display the result in the "Weather" section of the page
document.addEventListener("DOMContentLoaded", function() {
    const windChillElement = document.getElementById("windChill");
    windChillElement.textContent = `Wind Chill: ${windChill} °F`;
});


const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
 
const today = new Date();
currentyear.innerHTML = today.getFullYear()
 
lastModified.innerHTML = document.lastModified
 