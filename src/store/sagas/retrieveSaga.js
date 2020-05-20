import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../actions";
import axios from "axios";
const apiUrl ='http://211.253.28.27:8080';

function* fetchDeviceListSaga(action){
    try{
        const json ={
            hearders :{
                'Accept' : 'application/json', 
                'Authorization' : ''          
            }
        }
        const {data} = yield call.apply([axios, 'post'], apiUrl+'/device/retrieveDeviceList?pageSize=100&sort=alias',json)
        yield put(actions.RETRIEVE_DEVICELIST_SUCCESS(data));
    }
    catch(error){
        yield put(actions.RETRIEVE_DEVICELIST_FAIL(error.response));
    }
}
export default function* watchRetrieve(){
    yield takeEvery(actions.RETRIEVE_DEVICELIST,fetchDeviceListSaga);
}