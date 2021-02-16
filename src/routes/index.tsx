import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Welcome,
  StudentSignIn,
  StudentSignUp,
  CompanySignIn,
  SelectionProfileType,
  CompletedStudentRegistration,
  CompletedCompanyRegistration,
} from '~/pages';

import Teste from '~/pages/Teste';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f7f9f9' },
      }}
      initialRouteName="Welcome"
    >
      <Auth.Screen name="Welcome" component={Welcome} />
      <Auth.Screen name="Teste" component={Teste} />
      <Auth.Screen
        name="SelectionProfileType"
        component={SelectionProfileType}
      />
      <Auth.Screen name="StudentSignIn" component={StudentSignIn} />
      <Auth.Screen name="StudentSignUp" component={StudentSignUp} />
      <Auth.Screen name="CompanySignIn" component={CompanySignIn} />
      <Auth.Screen
        name="CompletedStudentRegistration"
        component={CompletedStudentRegistration}
      />
      <Auth.Screen
        name="CompletedCompanyRegistration"
        component={CompletedCompanyRegistration}
      />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
