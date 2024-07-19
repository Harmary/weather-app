import { createSelector } from "@reduxjs/toolkit";
import { selectChoosedGeoposition } from "src/entities/geoposition";
import { selectWeather } from "./selectWeather";

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
