import React from 'react';
import { Image } from 'react-native';

import ideaImage from '../../themes/assets/images/idea.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={ideaImage} />

      <Title>Faça seu login</Title>
    </Container>
  );
};

export default SignIn;
