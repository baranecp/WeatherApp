import "../src/style.css";
import { dateFormatter } from "./utils/dateFormatter";
import sunny from "../src/img/sunny.svg";

export function render_left_side(current, location, condition) {
  const section = document.querySelector("section.current");
  const currentTemp = document.querySelector(".current__temp");
  const currentCity = document.querySelector(".current__city");
  const currentDayTime = document.querySelector(".current__daytime");

  currentTemp.textContent = `${Math.round(current.temp_c)}°`;
  currentCity.textContent = `${location.name}`;
  currentDayTime.textContent = `${dateFormatter(location.localtime)}`;

  const img = document.createElement("img");
  if (condition.text === "Sunny") img.src = sunny;
  img.alt = condition.text;
  const span = section.querySelector("span");
  section.insertBefore(img, span.nextSibling);
}
