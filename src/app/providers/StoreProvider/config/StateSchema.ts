import { WeatherState } from "src/entities/weather/model/slice/weatherSlice";
import { GeopositionState } from "src/entities/geoposition/model/slice/geopositionSlice";

export interface StateSchema {
    weather: WeatherState;
    geoposition: GeopositionState;
} 