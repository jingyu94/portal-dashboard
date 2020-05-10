import { spawn } from "redux-saga/effects";
import watchRetrieve from './retrieveSaga'
export default function* rootSaga() {
    yield spawn(watchRetrieve);
}
  