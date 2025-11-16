document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const locationInput = document.getElementById("location");

  searchBtn.addEventListener("click", searchWeather);
  locationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") searchWeather();
  });
});
// Get coordinates from city name using OpenStreetMap Nominatim
async function getCoordinates(city) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1`
  );
  const data = await response.json();
  if (data.length > 0) {
    const { lat, lon } = data[0];
    return { latitude: lat, longitude: lon };
  }
  return null;
}

// Fetch weather data from Open-Meteo
async function fetchWeatherData(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,cloudcover,pressure_msl,precipitation,rain&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.current_weather || !data.hourly) {
      alert("Weather data could not be fetched.");
      return;
    }

    const current = data.current_weather;
    const hourly = data.hourly;

    // Find current hour index in hourly data
    const currentTime = new Date(current.time);
    const index = hourly.time.findIndex(
      (t) => new Date(t).getTime() === currentTime.getTime()
    );
    const i = index >= 0 ? index : 0; // fallback

    const weather = {
      temperature: current.temperature,
      wind_speed: current.windspeed,
      wind_direction: hourly.wind_direction_10m[i],
      humidity: hourly.relative_humidity_2m[i],
      cloud_cover: hourly.cloudcover[i],
      pressure: hourly.pressure_msl[i],
      precipitation: hourly.precipitation[i],
      rain: hourly.rain[i],
      time: currentTime.toLocaleString(),
    };

    displayWeather(weather, lat, lon);
  } catch (error) {
    alert("Error fetching weather data.");
    console.error(error);
  }
}

// Display weather data
function displayWeather(weather, lat, lon) {
  const div = document.getElementById("current-weather");
  div.innerHTML = `
        <h2>Current Weather</h2>
       <div id="weather"> <p>Coordinates: ${lat}°N ${lon}°E</p>
        <p>Time: ${weather.time}</p>
        <p>Temperature: ${weather.temperature} °C</p>
        <p>Humidity: ${weather.humidity} %</p>
        <p>Wind Speed: ${weather.wind_speed} m/s</p>
        <p>Wind Direction: ${weather.wind_direction}°</p>
        <p>Cloud Cover: ${weather.cloud_cover} %</p>
        <p>Pressure: ${weather.pressure} hPa</p>
        <p>Precipitation: ${weather.precipitation} mm</p>
        <p>Rain: ${weather.rain} mm</p> </div>
    `;
}

// Handle search
async function searchWeather() {
  const city = document.getElementById("location").value.trim();
  if (!city) {
    alert("Please enter a location.");
    return;
  }
  const coords = await getCoordinates(city);
  if (!coords) {
    alert("Location not found.");
    return;
  }
  await fetchWeatherData(coords.latitude, coords.longitude);
  document.getElementById("location").value = "";
}
