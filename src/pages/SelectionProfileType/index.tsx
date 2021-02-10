import React from 'react';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';

import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Logo />

      <S.Handles />

      <S.StrongText>Plataforma colaborativa.</S.StrongText>

      <S.Description>
        Escolha seu tipo de usuário para logar ou registrar-se no sistema.
      </S.Description>

      <S.ButtonsWrapper>
        <S.Button
          backgroundColor={colors.secondaryColor}
          onPress={() => navigation.navigate('CompanySignIn')}
        >
          <S.CompanyButtonText>Empresa</S.CompanyButtonText>
        </S.Button>

        <S.StudentButton onPress={() => navigation.navigate('StudentSignIn')}>
          <S.StudentButtonText>Aluno</S.StudentButtonText>
        </S.StudentButton>
      </S.ButtonsWrapper>
    </S.Container>
  );
};

export default Welcome;
