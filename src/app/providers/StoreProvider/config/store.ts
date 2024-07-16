import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "src/entities/weather/model/slice/weatherSlice";
import { StateSchema } from "./StateSchema";
import { geopositionReducer } from "src/features/getWeatherByCityName/model/slice/geopositionSlice";

export const store = configureStore<StateSchema>({
  reducer: {
    weather: weatherReducer,
    geoposition: geopositionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
