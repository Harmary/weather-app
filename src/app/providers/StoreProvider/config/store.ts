import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "src/entities/weather/model/slice/weatherSlice";
import { StateSchema } from "./StateSchema";

export const store = configureStore<StateSchema>({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
