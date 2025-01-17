import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGeoposition = createAsyncThunk(
    'geoposition/getGeopositionByQuery',
    async (q: string) => {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
          params: {
            q: q,
            limit: 5,
            appid: process.env.REACT_APP_API_KEY,
          },
        });

        return response.data
    },
)