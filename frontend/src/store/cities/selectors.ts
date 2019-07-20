import { AppState } from "../index";

export const cititesSelector = (state: AppState) => state.cities.cities;
export const citiesLoadingSelector = (state: AppState) => state.cities.loading;
