 import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(logger, sagaMiddleware));
export default store; 