import "../src/style.css";
import { dateFormatter } from "./utils/dateFormatter";

export function render_left_side(current, location, condition) {
  const section = document.querySelector("section.currnet");
  const currentTemp = document.querySelector(".current__temp");
  const currentCity = document.querySelector(".current__city");
  const currentDayTime = document.querySelector(".current__daytime");

  currentTemp.textContent = `${current.temp_c}°`;
  currentCity.textContent = `${location.name}`;
  currentDayTime.textContent = `${dateFormatter(location.localtime)}`;

  const img = document.createElement("img");
  img.src = condition.icon;
  img.alt = condition.text;
  const span = section.querySelector("span");
  section.insertBefore(img, span.nextSibling);
}
