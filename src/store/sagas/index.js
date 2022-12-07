import {fork, all} from 'redux-saga/effects';
// Saga Imports
import materialStoreSagas from './materialStoreSagas';
import authSagas from './authSagas';
import idiomsSagas from './idiomsSagas';
// import otherSagas from './otherSagas';
export default function* rootSaga() {
  yield all([
    // Sagas
    fork(materialStoreSagas),
    fork(authSagas),
    fork(idiomsSagas),
  ]);
}
