import styled from 'styled-components/native';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import imageProfile from '~/themes/assets/images/profile-example.png';

import colors from '~/themes/colors';

export const Wrapper = styled.View`
  position: relative;
`;

export const ProfileImage = styled.Image.attrs(() => ({
  source: imageProfile,
}))`
  width: ${ww(46.5)}px;
  height: ${ww(46.5)}px;
  margin-top: ${wh(4)}px;
  border-radius: ${ww(23.25)}px;
`;

export const ChangeImageButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;

  width: ${ww(14)}px;
  height: ${ww(14)}px;
  border-radius: ${ww(7)}px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.secondaryColor};
`;
