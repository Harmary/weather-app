import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const getInfoAboutTheWeather = createAsyncThunk(
    'weather/getInfoAboutTheWeather',
    async (geoId: number, thunkAPI) => {
        const response = await axios.get(
            `https://api.gismeteo.net/v2/weather/current/${geoId}`,
            {
                headers: {
                    'X-Gismeteo-Token': '56b30cb255.3443075',
                    'Accept-Encoding': 'deflate, gzip',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                },
                params: {
                    lang: 'en',
                }
            }
        );



        return response.data
    },
)