import { AppRegistry } from 'react-native';
import React from 'react';
import Login from './Login';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware  } from 'redux';
import placeReducer from './placeReducer';
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  places: placeReducer
});



const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga)

const RNRedux = () => (
  <Provider store = { store }>
    <Login />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);