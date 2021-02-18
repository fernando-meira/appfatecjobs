import styled, { css } from 'styled-components/native';
import {
  heightPercentageToDP as wh,
  widthPercentageToDP as ww,
} from 'react-native-responsive-screen';
import { Platform } from 'react-native';

import colors from '~/themes/colors';

interface IWrapperProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}
interface ITextInputProps {
  errors?: boolean;
}

export const Container = styled.View`
  min-height: 60px;
`;

export const Wrapper = styled.View<IWrapperProps>`
  border-width: 2px;
  margin-bottom: ${wh(1)}px;
  border-radius: ${ww(2)}px;

  border-color: ${({ isErrored }) =>
    isErrored ? colors.red : colors.placeholderTextColor};

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      border-color: ${colors.primaryColor};
    `}
`;

export const TextInput = styled.TextInput<ITextInputProps>`
  margin-top: ${Platform.OS === 'android' ? 8 : 0}px;

  flex: 1;

  font-size: ${ww(4)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const ErrorText = styled.Text`
  position: absolute;
  right: 8px;

  color: ${colors.red};
  font-size: ${ww(3)}px;
  font-family: 'Poppins-Regular';
`;
