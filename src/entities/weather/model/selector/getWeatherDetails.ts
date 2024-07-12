import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";

export const getWeatherDetails = (state: StateSchema) => state.weather.value?.list[0]