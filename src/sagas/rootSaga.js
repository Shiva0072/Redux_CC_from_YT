import { all } from "redux-saga/effects";
import watchUserSaga from "./handlers/fetchUsers";

function* helloSaga() {
  console.log("Hello sagas");
}

export default function* rootSaga() {
  yield all([watchUserSaga(), helloSaga()]);
}
