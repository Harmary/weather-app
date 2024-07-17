import { StateSchema } from "src/app/providers/StoreProvider/config/StateSchema";

export const selectChoosedGeoposition = (state: StateSchema) => state.geoposition.selectedGeo;