import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '~/themes/colors';
import handles from '~/themes/assets/svg/handleshake.svg';

interface IRectButtonProps extends RectButtonProps {
  backgroundColor?: string;
}

export const Container = styled.View`
  padding: ${wh(8.4)}px ${ww(11)}px;

  flex: 1;
  align-items: center;
  justify-content: space-between;

  background: ${colors.background};
`;

export const Handles = styled(handles).attrs(() => ({
  height: ww('85%'),
}))``;

export const StrongText = styled.Text`
  text-align: center;
  font-size: ${ww(8)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const Description = styled.Text`
  text-align: center;
  font-size: ${ww(4)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const ButtonsWrapper = styled.View`
  position: relative;

  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<IRectButtonProps>`
  width: 184px;
  height: 50px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.primaryColor};
`;

export const CompanyButtonText = styled.Text`
  text-align: center;
  font-size: ${ww(4.4)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const StudentButton = styled(Button)`
  right: 0;
  z-index: -1;
  position: absolute;
`;

export const StudentButtonText = styled.Text`
  text-align: center;
  font-size: ${ww(4.4)}px;
  color: ${colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
