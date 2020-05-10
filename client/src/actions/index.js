export const RETRIEVE_DEVICELIST = " RETRIEVE_DEVICELIST";
export const RETRIEVE_DEVICELIST_SUCCESS = " RETRIEVE_DEVICELIST_SUCCESS";
export const RETRIEVE_DEVICELIST_FAIL = " RETRIEVE_DEVICELIST_FAIL";

//Action에서는 비동기 처리 하지 않음, 비동기 처리는 SAGA에서 수행 Action은 순수함수 형태로 작성

export function retrieveDeviceList() {
  return {
    type: RETRIEVE_DEVICELIST
    }
  }
export function retrieveDeviceListSuccess(data) {
  return {
    type: RETRIEVE_DEVICELIST_SUCCESS,
    data
    }
  }  
export function retrieveDeviceListFail(error) {
  return {
    type: RETRIEVE_DEVICELIST_FAIL,
    error
    }
  }


//디바이스 리스트 조회하기
/* export function retrieveDeviceList() {
  return {
    type: RETRIEVE_DEVICELIST,
    payload
  }


  return (dispatch) => {
    return axios.get(apiUrl + '/device/retrieveDeviceList?pageSize=100&sort=alias', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJob25naG9uZzUzNzdAZ21haWwuY29tIiwiaWF0IjoxNTg4NzI4MjQzLCJleHAiOjE1ODg3OTMwNDN9.tNkqaPuphlZBy4OIK1SN-7YSnynNC6wfJBI6nGa3VgReblxbMFo1i9ms0kF9SIGAiq-PkDw-9x7TzyXDWTQMOg'
      }
    }
    )
      .then(response => {
        runningDevices = response.data.body.list;
        runningDevices.forEach(function (element) {
          params.deviceIds.push(element.deviceId);
          botNames.deviceIds.push(element.alias);
          if (element.status == '1') {
            tempNum++;
            element.status = 'Running';
          }
        })

        retrieveLatestData();
      })
      .catch(err => console.log(err));
  } 


} */