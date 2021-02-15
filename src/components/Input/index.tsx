import React from 'react';
import { TextInputProps } from 'react-native';

import colors from '../../themes/colors';
import * as S from './styles';

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
    <S.Container backgroundColor={backgroundColor} borderColor={borderColor}>
      <S.Icon name={icon} size={20} color={colors.primaryColor} />

      <S.TextInput
        {...rest}
        keyboardAppearance="dark"
        placeholderTextColor={colors.placeholderTextColor}
      />
    </S.Container>
  );
};

export default Input;
