import { combineReducers } from 'redux';
import {reducer as retrieve} from './retrieveReducer';
 
 
const rootReducer = combineReducers({
  retrieve,
})
 
export default rootReducer