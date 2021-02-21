import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  padding: ${wh(4)}px ${ww(11)}px;

  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const TopContent = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const MiddleContent = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;
