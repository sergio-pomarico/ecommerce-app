import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from '@routes/main';
import {ThemeProvider} from '@config/theme';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
