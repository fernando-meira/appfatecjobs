import styled from 'styled-components/native';
import { heightPercentageToDP as wh } from 'react-native-responsive-screen';
import { Platform } from 'react-native';

import colors from '~/themes/colors';

export const Wrapper = styled.View`
  margin-bottom: ${wh(1)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? 8 : 0}px;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${colors.primaryColor};
`;
