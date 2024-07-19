import { selectWeather } from "./selectWeather";
import { WeatherState } from "../slice/weatherSlice";
import { createSelector } from "@reduxjs/toolkit";

export const selectWeatherDetails = createSelector([selectWeather], (state: WeatherState) => {
  const [currentWeather] = state.value?.list || [];
  return currentWeather;
});
