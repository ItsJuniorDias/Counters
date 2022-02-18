import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'react-native';

import theme from './src/global/styles/theme';

import Dashboard from './src/screens/Dashboard';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
         />
        <Dashboard/>
    </ThemeProvider>
  );
};

export default App;
