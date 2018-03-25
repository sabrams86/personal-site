import _flatten from 'lodash/flatten';

import { all } from 'redux-saga/effects';
import { sagas as app } from './javascripts/redux/app/index';

export default function* root() {
  yield all(_flatten([app]));
}
