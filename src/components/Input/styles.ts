import styled from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

interface ContainerProps {
  borderColor?: string;
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-radius: 10px;
  padding: 0 ${ww(4)}px;
  margin-bottom: ${wh(1)}px;

  align-items: center;
  flex-direction: row;
  justify-content: center;

  border-color: ${({ borderColor }) => borderColor || 'transparent'};
  background: ${({ backgroundColor }) =>
    backgroundColor || colors.secondaryColor};
`;

export const TextInput = styled.TextInput`
  margin-top: ${Platform.OS === 'android' ? 6 : 0}px;

  flex: 1;

  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${colors.primaryColor};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${ww(2)}px;
`;
