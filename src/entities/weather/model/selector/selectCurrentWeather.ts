import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";
import { WeatherState } from "../slice/weatherSlice";

const selectWeather = (state: StateSchema) => state.weather

export const selectCurrentWeather = createSelector(
    [selectWeather], (state: WeatherState) => {
        return {
            temperature: state.value?.list[0].main.temp,
            city: state.value?.city.name,
            cloudiness: state.value?.list[0].weather[0].id,
            isLoading: state.isLoading,
            error: state.error
        }
    }
)
