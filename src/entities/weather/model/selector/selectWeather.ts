import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";

export const selectWeather = (state: StateSchema) => state.weather;
