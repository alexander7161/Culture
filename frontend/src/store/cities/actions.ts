import { REQ_CITIES, SET_CITIES } from "./types";

function requestCities() {
	return { type: REQ_CITIES };
}

function setCities() {
	return { type: SET_CITIES };
}

export { requestCities, setCities };
