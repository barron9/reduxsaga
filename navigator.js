 import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';


//import AnotherScreen from '../Screens/AnotherScreen';
//import HomeScreen from '../Screens/HomeScreen';
import Login from './Login';
//import MainScreen from '../Screens/Main';


import { createBottomTabNavigator } from 'react-navigation';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createBottomTabNavigator({
   Login: {
   	screen: Login,
   	navigationOptions: {
   		tabBarLabel: 'Login',
   	
   	}
   },
  
},{
	initialRouteName: 'Login',
    tabBarOptions: {
  		activeTintColor: '#e91e63',
  		labelStyle: {
    		fontSize: 30,
  		},
  		style: {
   			backgroundColor: 'blue',
  		},
	}
})


const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);
export { RootNavigator, AppNavigator, middleware };