import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${wh(3)}px;
  margin-bottom: ${wh(-1.5)}px;
  font-family: 'Poppins-SemiBold';
`;

export const Subtitle = styled.Text`
  font-size: ${wh(2)}px;
  font-family: 'Poppins-Regular';
`;

export const WrapperText = styled.View``;
