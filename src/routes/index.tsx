import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Welcome,
  Profile,
  StudentSignIn,
  StudentSignUp,
  CompanySignIn,
  SelectionProfileType,
  StudentForgotPassword,
  CompletedStudentRegistration,
  CompletedCompanyRegistration,
  PasswordRecoveryConfirmation,
} from '~/pages';

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
      <Auth.Screen name="Profile" component={Profile} />
      <Auth.Screen
        name="StudentForgotPassword"
        component={StudentForgotPassword}
      />
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
      <Auth.Screen
        name="PasswordRecoveryConfirmation"
        component={PasswordRecoveryConfirmation}
      />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
