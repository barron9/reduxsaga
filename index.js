import { AppRegistry } from 'react-native';
import React from 'react';
import Login from './Login';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import placeReducer from './placeReducer';
import createSagaMiddleware from 'redux-saga'
import { helloSaga, root } from './sagas'
import { createStackNavigator, createAppContainer } from "react-navigation";
import LanguageSelector from './LanguageSelector';
import { composeWithDevTools } from 'redux-devtools-extension';

console.disableYellowBox = true;

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    places: placeReducer
});
const initialState = {
    places: [],

};

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeWithDevTools(
    applyMiddleware(sagaMiddleware),

)
    /*
    compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )*/
    //enhancers
);
store.subscribe(() => console.log("current store: ", JSON.stringify(store.getState(), null, 4)))

sagaMiddleware.run(root)


const AppNavigator = createStackNavigator({
    LanguageSelector: { screen: LanguageSelector },
    Home: { screen: Login }
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