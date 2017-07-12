// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Please Login',
  };

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

const App = StackNavigator({
  Login: { screen: LoginScreen },
});

export default App;
