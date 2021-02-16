import React, { useState, useRef, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import colors from '../../themes/colors';
import * as S from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  name: string;
  placeholder: string;
  borderColor?: string;
  backgroundColor?: string;
}

interface InputReference extends TextInputProps {
  value: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  name,
  borderColor,
  placeholder,
  backgroundColor,
  ...rest
}) => {
  const inputRef = useRef<InputReference>(null);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current) setIsFilled(!!inputRef.current.value);
  }, []);

  const handleChangeText = useCallback(text => {
    if (inputRef.current) inputRef.current.value = text;
  }, []);

  return (
    <S.Container backgroundColor={backgroundColor} borderColor={borderColor}>
      <S.PlaceholderLabel
        isFocused={isFocused}
        isFilled={isFilled}
        onPress={() => setIsFocused(!isFocused)}
      >
        {placeholder}
      </S.PlaceholderLabel>

      <S.Icon name={icon} size={20} color={colors.primaryColor} />

      <S.TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        onChangeText={handleChangeText}
        {...rest}
        keyboardAppearance="dark"
        placeholderTextColor={colors.placeholderTextColor}
      />
    </S.Container>
  );
};

export default Input;
