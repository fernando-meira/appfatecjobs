import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { DefaultButton } from '~/components';

import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
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
      >
        <S.StartButtonText>Começar</S.StartButtonText>
      </DefaultButton>
    </S.Container>
  );
};

export default Welcome;
