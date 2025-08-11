import {
  renderCurrentCityTemp,
  renderWeatherDetails,
  renderWeatherForecast,
  renderNextDays,
} from "./weatherUI";

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "72850a547f4f40d1bd6111420250708";
  let city = "Bratislava";
  const search_btn = document.querySelector(".search-icon");
  let city_input = document.querySelector(".search");

  search_btn.addEventListener("click", () => {
    if (city_input.value.trim() !== "") {
      get_weather_data(city_input.value, apiKey);
      city_input.value = "";
    }
  });

  async function get_weather_data(city, apiKey) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=yes`
      );
      const weatherData = await response.json();
      const { current, location, forecast } = weatherData;
      const { condition } = current;
      const { forecastday } = forecast;
      console.log(forecastday, current);
      renderCurrentCityTemp(current, location, condition);
      renderWeatherDetails(current, forecastday);
      renderWeatherForecast(forecastday);
      renderNextDays(forecastday);
    } catch (error) {
      alert(`Error fetching weather data: ${error.message}`);
    }
  }
  get_weather_data(city, apiKey);
});
