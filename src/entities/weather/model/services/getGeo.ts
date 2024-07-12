import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGeo = createAsyncThunk(
    'weather/getInfoAboutTheWeather',
    async (geoId: number, thunkAPI) => {
        const response = await axios.get(
            `https://api.gismeteo.net/v2/weather/current/${geoId}`,
            {
                headers: {
                    'X-Gismeteo-Token': '56b30cb255.3443075',
                    'Accept-Encoding': 'deflate, gzip'
                },
                // params: {
                //     lang: 'en',
                // }
            }
        );



        return response.data
    },
)