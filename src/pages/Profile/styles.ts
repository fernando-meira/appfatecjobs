import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';

export const Container = styled.View`
  width: 100%;
  padding: ${wh(4)}px;

  flex: 1;
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const TextTopWrapper = styled.View`
  width: 100%;
  margin: ${wh(5)}px 0;

  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${ww(6.7)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled.Text`
  font-size: ${ww(5)}px;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const InfoWrapper = styled.View`
  margin-top: ${wh(4)}px;
`;

export const ContentRow = styled.View`
  margin-top: ${wh(2)}px;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const RegularText = styled.Text`
  font-size: ${ww(4)}px;
  font-family: 'Poppins-Regular';
`;
