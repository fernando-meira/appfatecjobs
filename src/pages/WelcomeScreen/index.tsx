import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

const Welcome: React.FC = () => {
  return (
    <S.Container>
      <Text>Bem-vindo ao Fatec Jobs!</Text>
    </S.Container>
  );
};

export default Welcome;
