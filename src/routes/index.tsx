import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, SignOut } from '../pages';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignOut" component={SignOut} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
