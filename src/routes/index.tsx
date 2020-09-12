import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, SignOut } from '../pages';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#1D2433' },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignOut" component={SignOut} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
