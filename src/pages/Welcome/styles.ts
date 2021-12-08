import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';
import schoolbooks from '~/themes/assets/svg/schoolbooks.svg';

export const Container = styled.View`
  padding: ${wh(4)}px ${ww(11)}px;

  flex: 1;
  align-items: center;
  justify-content: space-between;

  background: ${colors.background};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${ww(8)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const Schoolbooks = styled(schoolbooks).attrs(() => ({
  height: wh(42),
}))``;

export const Description = styled.Text`
  text-align: center;
  font-size: ${ww(4)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;
