import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';

import { load } from './podcasts';

export default function* rootSaga() {
  // Ficará responsável por chamar o LOAD_SUCCESS ou FAILURE
  return yield all([takeLatest(PodcastsTypes.LOAD_REQUEST, load)]);
}
