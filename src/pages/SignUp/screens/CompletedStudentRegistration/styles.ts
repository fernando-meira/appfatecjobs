import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Container = styled.View`
  padding: ${wh(4)}px;
  flex: 1;

  align-items: center;
  justify-content: space-between;
`;

export const TopContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.View`
  margin-top: ${wh(1.8)}px;
  margin-bottom: ${wh(3)}px;

  align-items: center;
`;

export const MediumText = styled.Text`
  text-align: center;
  font-size: ${ww(7)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const SmallText = styled.Text`
  font-size: ${ww(3.5)}px;
  font-family: 'Poppins-Regular';
  color: ${colors.placeholderTextColor};
`;

export const BackButton = styled.TouchableOpacity`
  height: 50px;
  width: ${ww(25)}px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.primaryColor};
`;

export const TextButton = styled.Text`
  color: ${colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
