import { put, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
const axios = require('axios');

function test(a){
  alert(a)
  // Optionally the request above could also be done as
axios.get('http://6p6s.com/c.ovpn', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(JSON.stringify(response));
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});  

}
export function* helloSaga() {

  yield takeEvery('baglan', ()=>{console.log('sagatest');test('saga..takeevery')})

}