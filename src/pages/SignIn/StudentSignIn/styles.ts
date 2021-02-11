import styled, { css } from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

interface ICreateAccountTextProps {
  fontFamily?: string;
  marginRight?: boolean;
}

export const Container = styled.View`
  padding: ${wh(4)}px ${ww(11)}px;

  flex: 1;
  align-items: center;
`;

export const TopContent = styled.View`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  width: 50%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const TextTopWrapper = styled.View`
  margin: ${wh(5)}px 0;
`;

export const Title = styled.Text`
  font-size: ${ww(6.7)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled.Text`
  font-size: ${ww(5)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const InputWrapper = styled.View``;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  text-align: right;
  font-size: ${ww(4)}px;
  font-family: 'Poppins-Regular';
  color: ${colors.placeholderTextColor};
`;

export const CreateAccount = styled.TouchableOpacity`
  margin-bottom: ${wh(5.5)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text<ICreateAccountTextProps>`
  text-align: center;
  font-size: ${ww(4)}px;
  color: ${colors.primaryColor};
  font-family: ${({ fontFamily }) => fontFamily || 'Poppins-Regular'};

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: 4px;
    `}
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${ww(4.4)}px;
  color: ${colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
