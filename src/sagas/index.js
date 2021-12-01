import { all, call, fork, put, select, take, takeLatest } from "redux-saga/effects";
import {
  requestRandomUser,
  requestRandomUserSuccess,
  requestRandomUserFailure,
} from "reducers/randomUser";

function* generateRandomUser() {
  try {
    let pageNumber = yield select((state) => state.randomUser.pageNumber);
    const response = yield call(
      fetch,
      `https://randomuser.me/api/?results=10&page=${pageNumber}`
    );
    const randomuUser = yield response.json(); // HERE is what you want
    yield put({
      type: requestRandomUserSuccess.type,
      payload: [...randomuUser.results],
    }); //action
  } catch (error) {
    console.log(error);
    yield put({ type: requestRandomUserFailure.type }); //action
  }
}

function* test () {
    while (true) {
        const action = yield take('randomUser/requestRandomUserSuccess')
        console.log(action)
    }
}

function hello () {
    console.log('Hello World!')
}

function* watchers() {
  yield all([
      call(hello),
      fork(hello),
      takeLatest(requestRandomUser.type, generateRandomUser),
      fork(test)
    ]); //type, fn

}

export default watchers;
