import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

interface ContainerProps {
  borderColor?: string;
  backgroundColor?: string;
}

interface PlaceholderLabelProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-width: 1px;
  margin-bottom: 8px;
  border-radius: 10px;

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
    `}

  align-items: center;
  flex-direction: row;
  justify-content: center;

  background: ${({ backgroundColor }) => backgroundColor || colors.white};
`;

export const PlaceholderLabel = styled.Text<PlaceholderLabelProps>`
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;

  ${props =>
    props.isFocused || props.isFilled
      ? css`
          margin-left: 42px;

          font-size: 10px;
          transform: translateY(5px);
        `
      : css`
          margin-left: 42px;

          font-size: 16px;
          transform: translateY(25px);
        `}

  color: ${colors.placeholderTextColor};
`;

export const TextInput = styled.TextInput`
  margin: 0;
  padding: 0;

  flex: 1;

  font-size: 16px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;
