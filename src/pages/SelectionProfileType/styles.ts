import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

import colors from '../../themes/colors';

export const Container = styled.View`
  margin-top: ${16 + getStatusBarHeight()}px;

  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ImageAbsolute = styled.Image`
  left: 0;
  top: -50px;
  position: absolute;
`;

export const Content = styled.View`
  width: 100%;
  max-height: 55%;
  border-top-right-radius: 60px;
  padding-bottom: ${32 + getBottomSpace()}px;

  flex: 1;
  justify-content: space-around;
  background-color: ${colors.darkBackground};
`;

export const Text = styled.Text`
  padding: 40px;

  font-size: 20px;
  color: ${colors.textColor};
  font-family: 'Poppins-Regular';
`;
