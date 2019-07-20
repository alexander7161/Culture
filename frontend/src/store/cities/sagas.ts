import { take, cancel, takeLatest, fork } from "redux-saga/effects";
import { REQ_CITIES } from "./types";
import { setCities } from "./actions";
import rsf from "../rsf";

export function* citiesSaga() {
	const task = yield fork(rsf.firestore.syncCollection, `cities`, {
		successActionCreator: setCities,
		transform: (x: any) => {
			const templates: any[] = [];
			x.forEach((doc: any) => {
				templates.push({
					key: doc.id,
					doc,
					data: doc.data(),
					loading: true
				});
			});
			return templates;
		}
	});
	yield take("SIGN_OUT");
	yield cancel(task);
}

export default function* root() {
	yield takeLatest(REQ_CITIES, citiesSaga);
}
