import { TextInput } from 'react-native';

import Icon from 'react-native-feather1s';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';

import colors from '~/themes/colors';

interface ContainerProps {
  marginBottom: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${wh(6.8)}px;
  padding: 0 ${ww(1)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.placeholderTextColor};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
  flex-direction: row;
  align-items: center;
`;

interface InputProps {
  editable?: boolean;
}

export const Input = styled(TextInput).attrs(() => ({
  placeholderTextColor: colors.placeholderTextColor,
}))<InputProps>`
  margin-bottom: -7px;
  flex: 1;
  height: 100%;
  font-size: ${ww(4.35)}px;
  ${({ editable }) =>
    editable
      ? css`
          color: ${colors.placeholderTextColor};
        `
      : css`
          color: ${colors.placeholderTextColor};
        `}
`;

export const PasswordIconWrapper = styled.TouchableOpacity`
  width: ${ww(5)}px;
  height: ${ww(5)}px;
`;

export const PasswordIcon = styled(Icon)``;

export const ErrorText = styled.Text`
  position: absolute;
  bottom: ${wh(-3)}px;
  color: ${colors.red};
  font-family: 'Poppins-Regular';
`;
