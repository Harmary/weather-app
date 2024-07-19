import { createSelector } from "@reduxjs/toolkit";
import { WeatherState } from "../slice/weatherSlice";
import { selectWeather } from "./selectWeather";

export const selectRequestState = createSelector([selectWeather], (state: WeatherState) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
  };
});
