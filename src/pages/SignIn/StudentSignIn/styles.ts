import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import colors from '~/themes/colors';

interface CreateAccontButtonProps {
  borderColor: string;
  backgroundColor: string;
}

interface CreateAccontButtonTextProps {
  textColor: string;
}

export const Container = styled.View`
  margin-top: ${32 + getStatusBarHeight()}px;

  flex: 1;
`;

export const ReturnButtonWrapper = styled.View`
  top: 0;
  left: 0;
  z-index: 2;
  position: absolute;
`;

export const ContentWrapper = styled.View`
  padding: 0 40px;
  margin-bottom: 80px;

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

export const CreateAccontButton = styled.TouchableOpacity<CreateAccontButtonProps>`
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  border-top-width: 1px;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  border-color: ${({ borderColor }) => borderColor};

  align-items: center;

  background: ${({ backgroundColor }) => backgroundColor};
`;

export const CreateAccontButtonText = styled.Text<CreateAccontButtonTextProps>`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  color: ${({ textColor }) => textColor};
`;

export const CreateAccontModalButton = styled.TouchableOpacity`
  flex: 1;

  align-items: center;
`;
