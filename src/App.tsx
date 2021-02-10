import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from '~/themes/colors';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      showHideTransition="slide"
      backgroundColor={colors.background}
    />
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
