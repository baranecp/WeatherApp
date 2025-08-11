import "../src/style.css";
import { dateFormatter, dateFormatterWithoutTime } from "./utils/dateFormatter";

export function renderCurrentCityTemp(current, location, condition) {
  const currentTemp = document.querySelector(".current__temp");
  const currentCity = document.querySelector(".current__city");
  const currentDayTime = document.querySelector(".current__daytime");

  currentTemp.textContent = `${Math.round(current.temp_c)}°`;
  currentCity.textContent = `${location.name}`;
  currentDayTime.textContent = `${dateFormatter(location.localtime)}`;

  const img = document.querySelector("img");
  img.src = condition.icon;
}

export function renderWeatherDetails(current, forecastday) {
  const tempmax = document.querySelector(".tempmax");
  const tempmin = document.querySelector(".tempmin");
  const humidity = document.querySelector(".humidity");
  const cloudy = document.querySelector(".cloudy");
  const wind = document.querySelector(".wind");
  const weatherDescription = document.querySelector(".weather-description");

  weatherDescription.textContent = `${forecastday[0].day.condition.text}`;
  tempmax.textContent = `${Math.round(forecastday[0].day.maxtemp_c)}°`;
  tempmin.textContent = `${Math.round(forecastday[0].day.mintemp_c)}°`;
  humidity.textContent = `${forecastday[0].day.avghumidity}%`;
  cloudy.textContent = `${current.cloud}%`;
  wind.textContent = `${Math.round(forecastday[0].day.maxwind_kph)} km/h`;
}

export function renderWeatherForecast(forecastday) {
  const forecastContainer = document.querySelector(".forecast");
  const hourly = forecastday[0].hour;
  forecastContainer.innerHTML = "";
  hourly.forEach((hour) => {
    const timeOnly = hour.time.split(" ")[1];

    const forecastItem = document.createElement("div");
    forecastItem.className = "forecast-item";

    forecastItem.innerHTML = `
    <img alt="${hour.condition.text}" src="${hour.condition.icon}" />
    <p>${timeOnly}</p>
    <p class="forecast-temp">${Math.round(hour.temp_c)}°</p>
    `;

    forecastContainer.appendChild(forecastItem);
  });
}

export function renderNextDays(forecastday) {
  const forecastdays = document.querySelector(".forecastdays");
  const forecatDaysWithoutToday = forecastday.slice(1);
  forecastdays.innerHTML = "";
  forecatDaysWithoutToday.forEach((day) => {
    const forecastDayItem = document.createElement("div");
    forecastDayItem.className = "forecastday";

    forecastDayItem.innerHTML = `
        <p>${dateFormatterWithoutTime(day.date)}</p>
        <span>
        <p>${Math.round(day.day.maxtemp_c)}°</p>
        <img src="${day.day.condition.icon}" />
        <span>
      `;

    forecastdays.appendChild(forecastDayItem);
  });
}
