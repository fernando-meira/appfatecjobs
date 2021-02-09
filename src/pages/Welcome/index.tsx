import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView } from 'react-native';

import Logo from '~/themes/assets/svg/small-logo.svg';
import schoolbooks from '~/themes/assets/images/schoolbooks-monochrome.png';

import * as S from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <Logo />

        <S.Title>
          Bem-vindo
          {'\n'}
          ao Fatec Jobs!
        </S.Title>

        <Image source={schoolbooks} />

        <S.Description>
          Plataforma desenvolvida para você que busca uma vaga ou um candidato.
        </S.Description>

        <S.StartButton
          onPress={() => navigation.navigate('SelectionProfileType')}
        >
          <S.StartButtonText>Começar</S.StartButtonText>
        </S.StartButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default Welcome;
