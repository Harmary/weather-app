import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";

export const selectWeatherDetails = (state: StateSchema) => {
  const [currentWeather] = state.weather.value?.list || [];
  return currentWeather;
};
