import * as actions from '../actions'

const initialState = {
    data : {}
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
      case actions.RETRIEVE_DEVICELIST:
        return {
          ...state,
        }
      case actions.RETRIEVE_DEVICELIST_SUCCESS:
        return {
          ...state,
          data: action.data
        }
      case actions.RETRIEVE_DEVICELIST_FAIL:
        return {
          ...state,
          error: action.error
        }
      default:
        return state;
    }
  }