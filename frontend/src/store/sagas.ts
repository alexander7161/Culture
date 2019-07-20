import { fork } from "redux-saga/effects";
import { citiesSaga } from "./cities/sagas";

export default function*() {
	yield fork(citiesSaga);
}
