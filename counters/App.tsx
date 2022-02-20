import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'react-native';

import theme from './src/global/styles/theme';


import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
          <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
