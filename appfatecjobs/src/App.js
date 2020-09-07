import React from 'react';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1D2433" />
      <View style={{ flex: 1, backgroundColor: '#1D2433' }} />
    </>
  );
}
