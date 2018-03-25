import _flatten from 'lodash/flatten';

import { all } from 'redux-saga/effects';
// import { sagas as app } from './javascripts/redux/app/index';
import { sagas as posts } from './javascripts/redux/posts/index';

export default function* root() {
  yield all(_flatten([
    // app,
    posts
  ]));
}
