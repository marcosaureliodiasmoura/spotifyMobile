import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';

import { load } from './podcasts';

import { signIn, init } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  // Ficará responsável por chamar o LOAD_SUCCESS ou FAILURE

  return yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
  ]);
}
