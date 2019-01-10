import { put, takeEvery, all,call,fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
const axios = require('axios');

function fetchdata() {
  axios.get('http://6p6s.com/c.ovpn', {
    params: {
      ID: 12345
    }
  })
    .then(function (response) {
      console.log(JSON.stringify(response));
      it.next(JSON.stringify(response))

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
function* fetchAll() {
  const task1 = yield fork(fetchNews, 'tr')
  const task2 = yield fork(fetchNews, 'us')
  yield call(delay, 1000)
}
function* fetchNews(resource) {
  // yield delay(4000)
  const json = yield fetch('https://newsapi.org/v2/top-headlines?country='+resource+'&apiKey=f86f324681bf445a8b7b0cb37ae341da')
    .then(response => response.json());
  yield put({ type: 'received', json: json.articles, });
}

export function* root() {
  //yield takeEvery('baglan', fetchNews)
  yield call(fetchAll)
  //yield takeEvery('baglan', () => { test('saga..takeevery') })
}

/*

import { delay } from 'redux-saga'
import { fork, call, put } from 'redux-saga/effects'
import api from './somewhere/api' // app specific
import { receiveData } from './somewhere/actions' // app specific

function* fetchAll() {
  const task1 = yield fork(fetchResource, 'users')
  const task2 = yield fork(fetchResource, 'comments')
  yield call(delay, 1000)
}

function* fetchResource(resource) {
  const {data} = yield call(api.fetch, resource)
  yield put(receiveData(data))
}

function* main() {
  yield call(fetchAll)
}

*/