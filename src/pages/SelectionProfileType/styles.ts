import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../themes/colors';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight}px;

  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
  max-height: 40%;
  border-top-right-radius: 60px;

  flex: 1;
  background-color: ${colors.darkBackground};
`;

export const Text = styled.Text`
  padding: 40px;

  font-size: 20px;
  color: ${colors.textColor};
  font-family: 'Poppins-Regular';
`;
