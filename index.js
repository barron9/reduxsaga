import { AppRegistry } from 'react-native';
import React from 'react';
import Login from './Login';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placeReducer from './placeReducer';
import createSagaMiddleware from 'redux-saga'
import { helloSaga, root } from './sagas'
import { createStackNavigator, createAppContainer } from "react-navigation";
import LanguageSelector from './LanguageSelector';
console.disableYellowBox = true;

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    places: placeReducer
});



const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root)


const AppNavigator = createStackNavigator({
    LanguageSelector: { screen: LanguageSelector },
    Home: {screen: Login}
}, {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,  // Set the animation duration time as 0 !!
      },
    }),
  });
const AppContainer = createAppContainer(AppNavigator);


const RNRedux = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);