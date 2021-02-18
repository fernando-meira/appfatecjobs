import styled from 'styled-components/native';
import { widthPercentageToDP as ww } from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Header = styled.View`
  width: 100%;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${ww(5)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;
