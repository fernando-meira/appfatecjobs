import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import colors from '~/themes/colors';
import { DefaultButton } from '~/components';

export const Container = styled.View`
  align-items: center;
  padding: 0 ${wh(4)}px;
  margin-top: ${wh(3)}px;
`;

export const CarouselWrapper = styled.View`
  position: relative;
`;

export const CarouselLabel = styled.Text`
  top: 0;
  left: 0;
  position: absolute;

  font-size: ${ww(3.5)}px;
  font-family: 'Poppins-Regular';
`;

export const CarouselContent = styled.View`
  width: 100%;
  height: ${wh(52)}px;
  margin-top: ${wh(4)}px;
  border-radius: ${ww(4)}px;
  padding: ${ww(3)}px ${ww(4)}px;

  display: flex;
  align-items: center;

  background-color: ${colors.secondaryColor};
`;

export const ContentRow = styled.View`
  width: 100%;

  margin-top: ${wh(1)}px;
`;

export const CarouselTitle = styled.Text`
  margin-top: ${wh(1)}px;

  text-align: center;
  font-size: ${ww(4)}px;
  font-family: 'Poppins-SemiBold';
`;

export const Label = styled.Text`
  font-size: ${ww(3.5)}px;
  font-family: 'Poppins-SemiBold';
`;

export const CarouselDescription = styled.Text`
  line-height: ${ww(4)}px;
  font-size: ${ww(3.5)}px;
  font-family: 'Poppins-Regular';
`;

export const InfoWrapper = styled.View`
  width: 100%;
  margin-top: auto;

  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
`;

export const RegularText = styled.Text`
  font-size: ${ww(3.5)}px;
  font-family: 'Poppins-Regular';
`;

export const SalaryText = styled.Text`
  font-size: ${ww(3.5)}px;
  font-family: 'Poppins-SemiBold';
`;

export const SmallCarouselWrapper = styled.View`
  width: 100%;
  height: ${wh(20)}px;
  margin-top: ${wh(4)}px;
  border-radius: ${ww(4)}px;
  padding: ${ww(3)}px ${ww(4)}px;

  background-color: ${colors.secondaryColor};
`;

export const SmallText = styled.Text`
  font-size: ${ww(2)}px;
  font-family: 'Poppins-Regular';
`;

export const Button = styled(DefaultButton)`
  margin-top: ${wh(4)}px;
`;
