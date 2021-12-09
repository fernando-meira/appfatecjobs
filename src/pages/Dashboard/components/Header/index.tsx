import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import * as S from './styles';
import { useAuth } from '~/hooks/auth';
import colors from '~/themes/colors';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  const splitFirstName = user?.nome && user?.nome.split(' ');
  const firstName = splitFirstName && splitFirstName[0];

  return (
    <S.Container>
      <S.WrapperText>
        {!!firstName && <S.Title>{`Olá ${firstName},`}</S.Title>}

        <S.Subtitle>Bem-vindo novamente!</S.Subtitle>
      </S.WrapperText>

      <TouchableOpacity
        onPress={() => {
          signOut();
          return navigation.navigate('StudentSignIn');
        }}
      >
        <FeatherIcon size={ww(8)} name="power" color={colors.primaryColor} />
      </TouchableOpacity>
    </S.Container>
  );
};

export default Header;
