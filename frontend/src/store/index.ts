import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducers";
import AppSagas from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const saga = createSagaMiddleware();
const store = createStore(Reducer, composeWithDevTools(
    applyMiddleware(saga)
  ));

saga.run(AppSagas);

export default store;

export type AppState = ReturnType<typeof Reducer>;
