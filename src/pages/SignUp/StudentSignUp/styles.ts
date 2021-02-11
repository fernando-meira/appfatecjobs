import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Container = styled.View`
  padding: ${wh(4)}px ${ww(11)}px;

  flex: 1;
`;

export const TopContent = styled.View`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  width: 50%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  margin: ${wh(5)}px 0;

  font-size: ${ww(6.7)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const InputWrapper = styled.View``;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${ww(4.4)}px;
  color: ${colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
