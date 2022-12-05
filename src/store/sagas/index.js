import {fork, all} from 'redux-saga/effects';
// Saga Imports
import authSagas from './authSagas';
import idiomsSagas from './idiomsSagas';
// import otherSagas from './otherSagas';
export default function* rootSaga() {
  yield all([
    // Sagas
    fork(authSagas),
    fork(idiomsSagas),
  ]);
}
