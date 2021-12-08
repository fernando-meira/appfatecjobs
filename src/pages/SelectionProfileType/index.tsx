import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';

import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigationCompanySignIn = useCallback(() => {
    navigation.navigate('CompanySignIn');
  }, [navigation]);

  const handleNavigationStudentSignIn = useCallback(() => {
    navigation.navigate('StudentSignIn');
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <Logo />

        <S.Handles />

        <S.StrongText>Plataforma colaborativa.</S.StrongText>

        <S.Description>
          Clique no botão abaixo para fazer login ou cadastrar-se na plataforma.
        </S.Description>

        <S.ButtonsWrapper>
          <S.Button
            backgroundColor={colors.secondaryColor}
            onPress={handleNavigationCompanySignIn}
          >
            <S.CompanyButtonText>Empresa</S.CompanyButtonText>
          </S.Button>

          <S.StudentButton onPress={handleNavigationStudentSignIn}>
            <S.StudentButtonText>Aluno</S.StudentButtonText>
          </S.StudentButton>
        </S.ButtonsWrapper>
      </S.Container>
    </SafeAreaView>
  );
};

export default Welcome;
