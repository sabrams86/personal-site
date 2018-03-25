import * as firebase from 'firebase';
import {
  fork, takeLatest
} from 'redux-saga/effects';

const CREATE_POST = 'posts/CREATE_POST';
const UPDATE_POST = 'posts/UPDATE_POST';

export const createPost = (data) => {
  return { data, type: CREATE_POST };
};

export const updatePost = (data) => {
  return { data, type: UPDATE_POST };
};

function* postCreate({ data }) {
  try {
    const newPostKey = firebase.database().ref().child('posts').push().key;
    const updates = {};
    updates[`/posts/${newPostKey}`] = data;

    return firebase.database().ref().update(updates);
    yield;
  } finally {
  }
}

function* watchPostCreate() {
  yield takeLatest(CREATE_POST, postCreate);
}

function* postUpdate({ data }) {
  try {
    console.log(data);
    yield;
  } finally {
  }
}

function* watchPostUpdate() {
  yield takeLatest(UPDATE_POST, postUpdate);
}

export const sagas = [
  fork(watchPostCreate),
  fork(watchPostUpdate)
];
