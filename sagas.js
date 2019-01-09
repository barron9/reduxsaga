import { put, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'


export function* helloSaga() {

  yield takeEvery('baglan', ()=>{console.log('sagatest');alert('saga..takeevery')})

}