import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInfoAboutTheWeather } from "src/entities/weather";
import { GEOPOSITION } from "src/shared/consts/geoposition";
import { weatherActions } from "src/entities/weather";

export const initializeGeoposition = createAsyncThunk("geoposition/initializeGeoposition", async (_, { dispatch }) => {
  const savedGeoposition = localStorage.getItem(GEOPOSITION);
  if (savedGeoposition) {
    const { lat, lon } = JSON.parse(savedGeoposition);
    await dispatch(
      getInfoAboutTheWeather({
        lat: lat.toString(),
        lon: lon.toString(),
      })
    );
  } else if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await dispatch(
          getInfoAboutTheWeather({
            lat: position.coords.latitude.toString(),
            lon: position.coords.longitude.toString(),
          })
        );
      },
      () => {
        dispatch(weatherActions.setError("Enable geoposition or select the place"));
      }
    );
  } else {
    dispatch(weatherActions.setError("Can't find any related info"));
  }
});
