import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersApi } from "../../API/userApi";

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./userSlice";

//Worker Saga function: will be fired on fetchUsersRequest actions
function* fetchUsersSaga() {
  try{
    const response = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(response.data));
  }
  catch(error){
    yield put(fetchUsersFailure(error.message));
  }
}

//Watcher Saga function: watches for actions dispatched to the store, starts worker saga
export function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
