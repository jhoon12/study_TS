import { ADDTODO, REMOVETODO } from "../action/constant";
import { takeEvery, put, delay, all, take } from "redux-saga/effects";
import {
  addToDo,
  addToDoItemAsync,
  removeToDo,
  removeToDoItemAsync,
} from "../action/action.";

function* addToDoAsync(action: ReturnType<typeof addToDo>) {
  yield alert("미들웨어 작동 중");
  yield put(addToDoItemAsync(action.text));
}
function* removeToDoAsync(action: ReturnType<typeof removeToDo>) {
  yield alert("미들웨어 작동 중");
  yield put(removeToDoItemAsync(action.id));
}
function* watchAdd() {
  yield takeEvery(ADDTODO, addToDoAsync);
}
function* watchRemove() {
  yield takeEvery(REMOVETODO, removeToDoAsync);
}
export default function* rootSaga() {
  yield all([watchAdd(), watchRemove()]);
} //제너레이터
