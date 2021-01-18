import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import colors from '~/themes/colors';

interface ModalViewProps {
  minHeight?: number;
}

const windowHeight = Dimensions.get('window').height;

export const Container = styled.View``;

export const Content = styled.View`
  width: 100%;

  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalView = styled.View<ModalViewProps>`
  width: 100%;
  padding: 32px 40px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  min-height: ${({ minHeight }) => minHeight || windowHeight * 0.7}px;

  align-items: center;

  background-color: ${colors.inputColor};
`;

export const Title = styled.Text`
  margin-bottom: 24px;

  font-size: 20px;
  color: ${colors.textColor};
  font-family: 'Poppins-Regular';
`;

export const Footer = styled.View`
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  border-top-width: 1px;
  border-color: ${colors.background};
  padding: 16px 0 ${16 + getBottomSpace()}px;

  align-items: center;
  flex-direction: row;

  background: ${colors.inputColor};
`;
