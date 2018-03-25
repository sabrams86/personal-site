import { fork } from 'redux-saga/effects';

// Constants

// const path = 'foo/app';

// const ACTION = `${path}/ACTION`;

// const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

// Reducer

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

// Actions

// Sagas

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export const sagas = [fork(helloSaga)];
