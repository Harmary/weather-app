import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
    value: number
}

const initialState: WeatherState = {
    value: 0,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
    },
})

export const { actions: weatherActions } = weatherSlice;
export const { reducer: weatherReducer } = weatherSlice;