import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Container = styled.View`
  padding: ${wh(4)}px ${ww(11)}px;

  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const TopContent = styled.View``;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const TextTopWrapper = styled.View`
  margin: ${wh(5)}px 0;
`;

export const Title = styled.Text`
  font-size: ${ww(6.3)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled.Text`
  font-size: ${ww(5)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const Form = styled.View`
  width: 100%;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${ww(4.4)}px;
  color: ${colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
