import React, { useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import colors from '../../themes/colors';
import * as S from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  name: string;
  backgroundColor?: string;
}

interface IIputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  name,
  backgroundColor,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);
  const { fieldName, registerField, error, defaultValue = '' } = useField(name);
  const inputValueRef = useRef<IIputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = 'value';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.Icon name={icon} size={20} color={colors.primaryColor} />

      <S.TextInput
        {...rest}
        keyboardAppearance="dark"
        placeholderTextColor={colors.placeholderTextColor}
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </S.Container>
  );
};

export default Input;
