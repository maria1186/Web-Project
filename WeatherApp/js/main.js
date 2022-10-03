const weather = document.querySelector(".weather");
const searchBtn = document.querySelector('button[role="search"]');
const cityField = document.querySelector('input[type="search"]');
const forecastRow = document.querySelector(".forecast > .row");
const dateElement = document.querySelector(".header__date");
const geolocateIcon = document.querySelector(".header__geolocate");

function printTodayDate() {
  const today = new Date();
  const options = {
    // weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "short",
    
    
  };
  dateElement.insertAdjacentText(
    "afterbegin",
    today.toLocaleString("en-us", options)
  );
}

function getWeekDay(date) {
  const options = { weekday: "short" };
  if (navigator.language !== "bg") {
    return date.toLocaleString("en-us", options);
  } else {
    return date.toLocaleString("bg-BG", options);
  }
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderForecast(forecast) {
  removeChildren(forecastRow);
  forecast.forEach((weatherData) => {
    const markup = `
        <div class="forecast__day">
        <h3 class="forecast__date">${getWeekDay(
          new Date(weatherData.dt * 1000)
        )}</h3>
        
        <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" id="icon" class="${weatherData.weather[0].description}">
        <p class="forecast__temp">${Math.floor(weatherData.main.temp)} °C</p>
        <p class="forecast__desc">${weatherData.weather[0].main}</p>
        </div>`;
    forecastRow.insertAdjacentHTML("beforeend", markup);
  });
  
}

function getForecast(url) {
  fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      const forecastData = data.list.filter((obj) =>
        obj.dt_txt.endsWith("06:00:00")
      );
    
      renderForecast(forecastData);
      
    });
}

function getCityWeather(url) {
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
     
      let sunset = data.sys.sunset;
      let date = new Date(sunset * 1000);
      let time = date.toLocaleTimeString([],{hour: "2-digit",minute: "2-digit", hour12: false});
      const markup = `<h1 class="location">${data.name}, ${data.sys.country}</h1>
                <div class="weather__summary">
                  <p> 
                  <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" id="icon" 
                  class="${data.weather[0].description}">
                  <span class="weather__celsius-value">${Math.floor(data.main.temp)}°C</span></p>
                  <p>${data.weather[0].description}</p>
                  <ul class="weather__miscellaneous">
                    <li><img src="./img/drop_humidity_icon.png">Humidity<span>${data.main.humidity}%</span></li>
                    <li><img src="./img/wind_icon.png"> Wind Speed <span>${data.wind.speed} m/s<span></li> 
                    <li><img src="./img/clouds_icon.png">Clouds<span>${data.clouds.all}%</span></li>
                    <li><img src="./img/sunset_icon.png">Sunset<span>${time}</span></li>
                  </ul>
                  
                </div> `;
               
      removeChildren(weather);
      weather.insertAdjacentHTML("beforeend", markup);

    })
    
    .catch((error) => {
      console.log(error);
    });
    
}

function getWeatherByCoordinates(latitude, longitude) {
  getCityWeather(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d8102b31b4349f539fd80e1a9881e405&units=metric`
  );

}


function getForecastByCoordinates(latitude, longitude) {
  getForecast(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=d8102b31b4349f539fd80e1a9881e405&units=metric`
  );
  
}

function getWeatherByCity(city) {
  getCityWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8102b31b4349f539fd80e1a9881e405&units=metric`
  );
}

function getForecastByCity(city) {
  getForecast(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d8102b31b4349f539fd80e1a9881e405&units=metric`
  );
}

function gps(position) {
  const { latitude, longitude } = position.coords;
  getWeatherByCoordinates(latitude, longitude);
  getForecastByCoordinates(latitude, longitude);
  
}

printTodayDate();

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherByCity(cityField.value);
  getForecastByCity(cityField.value);
});

geolocateIcon.addEventListener("click", (e) => {
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gps);
        
      } else {
        alert("Your browser does not support geolocation");
      }
    });
  