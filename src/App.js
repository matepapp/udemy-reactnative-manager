// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAviHOrPkkii3jFDdAv4eSLkLqHNPZPFIo',
      authDomain: 'reactnative-manager-b7832.firebaseapp.com',
      databaseURL: 'https://reactnative-manager-b7832.firebaseio.com',
      projectId: 'reactnative-manager-b7832',
      storageBucket: 'reactnative-manager-b7832.appspot.com',
      messagingSenderId: '903374882554'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
