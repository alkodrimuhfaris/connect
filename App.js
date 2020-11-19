import React, {Component} from 'react';
import Main from './src/screens/Main';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Main />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
