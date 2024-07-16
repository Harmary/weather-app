import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInfoAboutTheWeather = createAsyncThunk(
    'weather/getInfoAboutTheWeather',
    async (cords: { lon: string; lat: string }, thunkAPI) => {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            },
            params: {
              lon: cords.lon,
              lat: cords.lat,
              lang: "en",
              units: "metric",
              appid: process.env.API_KEY,
            },
          }
        );

        return response.data
    },
);

