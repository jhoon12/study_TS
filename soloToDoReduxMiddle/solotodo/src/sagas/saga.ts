import {
  ADDTODO,
  REMOVETODO,
  ADDTODOASYNC,
  REMOVETODOASYNC,
} from "../action/constant";
import { takeEvery, put, delay, all, take } from "redux-saga/effects";
import { addToDo, addToDoItemAsync } from "../action/action.";

function* addToDoAsync(action: ReturnType<typeof addToDo>) {
  yield alert('미들웨어 작동 중')

  yield put(addToDoItemAsync(action.text));
}
function* removeToDoAsync(action){
  yield alert("미들웨어 작동 중");
  yield put()
}
function* watchAdd() {
  yield takeEvery(ADDTODO, addToDoAsync);
}
function* watchRemove(){
  yield takeEvery(REMOVETODO, removeToDoAsync)
}
export default function* rootSaga() {
  yield all([watchAdd()]);
} //제너레이터
