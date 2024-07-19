import { createSlice } from "@reduxjs/toolkit";
import { getGeoposition } from "../services/getGeoposition";
import { GEOPOSITION } from "src/shared/consts/geoposition";

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
  reducers: {
    selectGeoposiion: (state, action) => {
      state.selectedGeo = action.payload;
      localStorage.setItem(GEOPOSITION, JSON.stringify(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getGeoposition.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(getGeoposition.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getGeoposition.rejected, (state) => {
      state.isLoading = false;
      state.error = "Something went wrong";
    });
  },
});

export const { actions: geopositionActions } = GeopositionSlice;
export const { reducer: geopositionReducer } = GeopositionSlice;
