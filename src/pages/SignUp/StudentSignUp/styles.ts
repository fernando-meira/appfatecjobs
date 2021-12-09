import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Container = styled.View`
  height: ${wh('95%')}px;
  padding: ${wh(2)}px ${ww(11)}px 0;

  flex: 1;
  justify-content: space-between;
`;

export const TopContent = styled.View`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  width: 100%;

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
