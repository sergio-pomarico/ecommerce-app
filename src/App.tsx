import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Navigation from '@routes/main';
import {ThemeProvider} from '@config/theme';
import {ModalWrapper} from '@components';

import store from '@store/reducers';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar barStyle="light-content" />
        <SafeAreaProvider>
          <Navigation />
          <ModalWrapper />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
