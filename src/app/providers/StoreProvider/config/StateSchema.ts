import { WeatherState } from "src/entities/weather/model/slice/weatherSlice";
import { GeopositionState } from "src/features/getWeatherByCityName/model/slice/geopositionSlice";

export interface StateSchema {
    weather: WeatherState;
    geoposition: GeopositionState;
} 