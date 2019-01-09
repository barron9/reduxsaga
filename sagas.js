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

function* testasync(){

  yield delay(4000)
  //yield put({type:''})
}


function* test(a) {
  //yield delay(4000)
  alert(a)

  const incomingResponse = yield (fetchdata)
  console.log(incomingResponse)

}
export function* root() {

  yield takeEvery('baglan', () => { test('saga..takeevery') })

}