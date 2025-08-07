import { render_left_side } from "./weatherUI";

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "72850a547f4f40d1bd6111420250708";
  let city = "London";
  const search_btn = document.querySelector(".search_div");
  let city_input = document.querySelector(".search input");

  city_input.addEventListener("input", function () {
    if (city_input.value.trim() !== "") {
      search_btn.classList.remove("disabled");
    } else {
      search_btn.classList.add("disabled");
    }
  });

  search_btn.addEventListener("click", () => {
    if (city_input.value.trim() !== "") {
      get_weather_data(city_input.value, apiKey);
    }
  });

  async function get_weather_data(city, apiKey) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=yes`
      );
      const weatherData = await response.json();
      const { current, location, forecast } = weatherData;
      const { condition } = current;
      const { forecastday } = forecast;
      console.log(location, current);
      render_left_side(current, location, condition);
    } catch (error) {
      alert(`Error fetching weather data: ${error.message}`);
    }
  }
  get_weather_data(city, apiKey);
});
