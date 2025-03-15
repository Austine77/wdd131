document.addEventListener("DOMContentLoaded", function () {
    // Display the current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Display last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Get temperature and wind speed
    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
        } else {
            return "N/A";
        }
    }

    document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
});
