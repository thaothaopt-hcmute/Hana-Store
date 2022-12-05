import {fork, all} from 'redux-saga/effects';
// Saga Imports
import idiomsSagas from './idiomsSagas';
// import otherSagas from './otherSagas';
// import authSagas from './authSagas';
export default function* rootSaga() {
  yield all([
    // Sagas
    fork(idiomsSagas),
    // fork(otherSagas),
    // fork(authSagas),
  ]);
}
