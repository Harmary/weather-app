import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";

export const getCurrentWeather = (state: StateSchema) => {
        return {
            temperature: state.weather.value?.list[0].main.temp,
            city: state.weather.value?.city.name,
            cloudiness: state.weather.value?.list[0].weather[0].id,
            isLoading: state.weather.isLoading
        }
}