const REQ_CITIES = "REQ_CITIES";
const SET_CITIES = "SET_CITIES";

export { REQ_CITIES, SET_CITIES };

type City = {};

export interface ReqCitiesAction {
	type: typeof REQ_CITIES;
}

export interface SetCitiesAction {
	type: typeof SET_CITIES;
	payload: City[];
}

export interface CitiesReducerState {
	cities: City[];
	loading: boolean;
}

export type LoyaltyTemplatesActionTypes = SetCitiesAction;
