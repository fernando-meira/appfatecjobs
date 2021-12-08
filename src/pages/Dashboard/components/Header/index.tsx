import React from 'react';
import { TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import * as S from './styles';
import colors from '~/themes/colors';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>Olá Fernando,</S.Title>

        <S.Subtitle>Bem-vindo novamente!</S.Subtitle>
      </S.WrapperText>

      <TouchableOpacity onPress={() => console.log('Deslogar')}>
        <FeatherIcon size={ww(8)} name="power" color={colors.primaryColor} />
      </TouchableOpacity>
    </S.Container>
  );
};

export default Header;
