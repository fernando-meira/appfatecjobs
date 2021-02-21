import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Wrapper = styled.View`
  width: 100%;
  padding: ${wh(1.5)}px ${ww(3)}px;

  flex-direction: row;
  align-items: center;
`;

export const TextWrapper = styled.View`
  margin-left: ${ww(3)}px;

  align-items: flex-start;
  justify-content: space-between;
`;

export const InformationText = styled.Text`
  /* width: 60%; */

  font-size: ${ww(3.4)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const Description = styled.Text`
  /* width: 60%; */

  font-size: ${ww(2.5)}px;
  text-transform: capitalize;
  font-family: 'Poppins-Regular';
  color: ${colors.placeholderTextColor};
`;
