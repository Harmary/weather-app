import { createSlice } from "@reduxjs/toolkit";
import { getGeoposition } from "../services/getGeoposition";

export interface GeopositionState {
  list: Geoposition[];
  selectedGeo?: Geoposition;
  isLoading: boolean;
  error?: string;
}

export interface Geoposition {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

const initialState: GeopositionState = {
  list: [],
  isLoading: false,
};

export const GeopositionSlice = createSlice({
  name: "Geoposition",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGeoposition.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(getGeoposition.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getGeoposition.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something went wrong";
    });
  },
});

export const { actions: geopositionActions } = GeopositionSlice;
export const { reducer: geopositionReducer } = GeopositionSlice;
