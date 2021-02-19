import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { DefaultButton } from '~/components';

import Logo from '~/themes/assets/svg/small-logo.svg';

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

        <S.Schoolbooks />

        <S.Description>
          Plataforma desenvolvida para você que busca uma vaga ou um candidato.
        </S.Description>

        <DefaultButton
          onPress={() => navigation.navigate('SelectionProfileType')}
          text="Começar"
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default Welcome;
