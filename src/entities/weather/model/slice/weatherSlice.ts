import { createSlice } from '@reduxjs/toolkit';
import { getInfoAboutTheWeather } from '../services/getInfoAboutTheWeather';
import { Weather } from '../types/types';

export interface WeatherState {
    value?: Weather,
    isLoading: boolean,
    error?: string 
}

const initialState: WeatherState = {
    value: undefined,
    isLoading: false,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInfoAboutTheWeather.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(getInfoAboutTheWeather.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getInfoAboutTheWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = 'Something went wrong'
        });
    }
})

export const { actions: weatherActions } = weatherSlice;
export const { reducer: weatherReducer } = weatherSlice;