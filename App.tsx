/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {MainNavigation} from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return <Provider
  store={store}
  >
    <PersistGate persistor={persistor} loading={null}>
    <MainNavigation />
    </PersistGate>
    
  </Provider>
}


export default App;
