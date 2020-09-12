import React from 'react';
import { TextInputProps } from 'react-native';

import colors from '../../themes/colors';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ icon, name, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={colors.inputTextColor} />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.inputTextColor}
        {...rest}
      />
    </Container>
  );
};

export default Input;