import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInfoAboutTheWeather } from "src/entities/weather";
import { GEOPOSITION } from "src/shared/consts/geoposition";
import { weatherActions } from "src/entities/weather";
import { geopositionActions } from "../slice/geopositionSlice";

export const initializeGeoposition = createAsyncThunk("geoposition/initializeGeoposition", async (_, { dispatch }) => {
  const savedGeoposition = localStorage.getItem(GEOPOSITION);
  if (savedGeoposition) {
    const geopos = JSON.parse(savedGeoposition);
    await dispatch(
      getInfoAboutTheWeather({
        lat: geopos.lat.toString(),
        lon: geopos.lon.toString(),
      })
    );
    dispatch(geopositionActions.selectGeoposiion(geopos));
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
