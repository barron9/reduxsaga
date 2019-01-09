import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import logger from 'redux-logger'

//import reducer from './reducer'

import Navigator from './navigator'

//const reducer = combineReducers({ reducer })

const baslangicdeger ={
    count:0
    
    }
    const reducer= (state = baslangicdeger,action) =>{
    switch(action.type){
        case 'INC':
        return {
            count:state.count+1
        }
        default:
        return state
    }
    }

const store = createStore(reducer, //applyMiddleware(logger)
)



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}