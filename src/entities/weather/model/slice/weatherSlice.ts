import { createSlice } from '@reduxjs/toolkit';
import { getInfoAboutTheWeather } from '../services/getInfoAboutTheWeather';

export interface WeatherState {
    value: any
}

const initialState: WeatherState = {
    value: {},
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getInfoAboutTheWeather.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    }
})

export const { actions: weatherActions } = weatherSlice;
export const { reducer: weatherReducer } = weatherSlice;