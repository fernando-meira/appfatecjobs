import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  name: string;
}

const Input: React.FC<InputProps> = () => {
  return (
    <Container>
      <TextInput />
    </Container>
  );
};

export default Input;
