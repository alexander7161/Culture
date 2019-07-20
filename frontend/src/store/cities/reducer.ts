import {
	CitiesReducerState,
	LoyaltyTemplatesActionTypes,
	SET_CITIES
} from "./types";

const INITIAL_STATE: CitiesReducerState = {
	loading: true,
	cities: []
};

export default (
	state: CitiesReducerState = INITIAL_STATE,
	action: LoyaltyTemplatesActionTypes
): CitiesReducerState => {
	switch (action.type) {
		case SET_CITIES:
			return { ...state, cities: action.payload, loading: false };
		default:
			return state;
	}
};
