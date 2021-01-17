import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StudentSignIn,
  StudentSignUp,
  CompanySignIn,
  CompanySignUp,
  SelectionProfileType,
} from '~/pages';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#1D2433' },
      }}
    >
      <Auth.Screen
        name="SelectionProfileType"
        component={SelectionProfileType}
      />
      <Auth.Screen name="StudentSignIn" component={StudentSignIn} />
      <Auth.Screen name="CompanySignIn" component={CompanySignIn} />
      <Auth.Screen name="StudentSignUp" component={StudentSignUp} />
      <Auth.Screen name="CompanySignUp" component={CompanySignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
