import { combineReducers } from "redux";
import CitiesReducer from "./cities/reducer";
export default combineReducers({
	cities: CitiesReducer
});
