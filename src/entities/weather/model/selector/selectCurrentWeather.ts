import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";
import { WeatherState } from "../slice/weatherSlice";
import { selectChoosedGeoposition } from "src/entities/geoposition";

const selectWeather = (state: StateSchema) => state.weather

export const selectCurrentWeather = createSelector(
    [selectWeather, selectChoosedGeoposition], (state, selectedGeo) => {
        return {
            temperature: state.value?.list[0].main.temp,
            city: selectedGeo?.name || state.value?.city.name,
            cloudiness: state.value?.list[0].weather[0].id,
            isLoading: state.isLoading,
            error: state.error
        }
    }
)
