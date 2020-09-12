import React from 'react';
import { Image } from 'react-native';

import ideaImage from '../../themes/assets/images/idea.png';
import { Input, Button } from '../../components';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={ideaImage} />

      <Title>Faça seu login</Title>

      <Input />
      <Input />

      <Button onPress={() => console.log('Feito')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
