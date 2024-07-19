import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInfoAboutTheWeather = createAsyncThunk(
    'weather/getInfoAboutTheWeather',
    async (cords: { lon: string; lat: string }) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            lon: cords.lon,
            lat: cords.lat,
            lang: "en",
            units: "metric",
            appid: process.env.REACT_APP_API_KEY,
          },
        });

        return response.data
    },
);

