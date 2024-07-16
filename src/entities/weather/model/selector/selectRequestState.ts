import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";

export const selectRequestState = (state: StateSchema) => {
  return {
    isLoading: state.weather.isLoading,
    error: state.weather.error,
  };
};
