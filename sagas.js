import { put, takeEvery, all } from 'redux-saga/effects'
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
function* fetchNews() {
  yield delay(4000)

  const json = yield fetch('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=f86f324681bf445a8b7b0cb37ae341da')
        .then(response => response.json(), );    
  yield put({ type: 'received', json: json.articles, });
}




export function* root() {
  yield takeEvery('baglan', fetchNews)

  //yield takeEvery('baglan', () => { test('saga..takeevery') })

}