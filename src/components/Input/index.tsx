import React from 'react';
import { TextInputProps } from 'react-native';

import colors from '../../themes/colors';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  name: string;
  borderColor?: string;
  backgroundColor?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  name,
  borderColor,
  backgroundColor,
  ...rest
}) => {
  return (
    <Container borderColor={borderColor} backgroundColor={backgroundColor}>
      <Icon name={icon} size={20} color={colors.primaryColor} />

      <TextInput
        {...rest}
        keyboardAppearance="dark"
        placeholderTextColor={colors.placeholderTextColor}
      />
    </Container>
  );
};

export default Input;
