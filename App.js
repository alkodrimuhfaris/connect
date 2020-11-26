import React, {Component} from 'react';
import Main from './src/screens/Main';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import { SafeAreaView } from 'react-native';

import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <Main />
        </SafeAreaView>
        {/* <SafeAreaProvider>
        </SafeAreaProvider> */}
      </Provider>
    );
  }
}
