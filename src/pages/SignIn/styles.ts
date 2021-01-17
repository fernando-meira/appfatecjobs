import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import colors from '~/themes/colors';

export const Container = styled.View`
  padding: 0 40px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 12px 0;

  font-size: 24px;
  color: ${colors.textColor};
  font-family: 'Poppins-Regular';
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  color: ${colors.textColor};
  font-family: 'Poppins-Regular';
`;

export const CreateAccontButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 16px 0 ${16 + getBottomSpace()}px;
  border-top-width: 1px;
  border-color: ${colors.inputColor};

  align-items: center;

  background: ${colors.background};
`;

export const CreateAccontButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;
