import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#1D2433" translucent />
    <View style={{ flex: 1, backgroundColor: '#1D2433' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
