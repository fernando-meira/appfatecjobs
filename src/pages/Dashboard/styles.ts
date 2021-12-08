import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

import colors from '~/themes/colors';

export const Container = styled.View`
  align-items: center;
  margin-top: ${wh(1.5)}px;
`;

export const ContentWrapper = styled.View`
  padding-top: ${wh(3)}px;
`;

export const ImageWrapper = styled.View`
  z-index: 0;
  width: 98%;
`;

export const ButtonImage = styled.TouchableOpacity`
  width: 100%;
`;
