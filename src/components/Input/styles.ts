import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

interface ContainerProps {
  borderColor?: string;
  backgroundColor?: string;
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

export const TextInput = styled.TextInput`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? 8 : 0}px;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${colors.primaryColor};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;
