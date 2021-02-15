import React, { useEffect, useRef } from 'react';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';
import { useField } from '@unform/core';
import colors from '~/themes/colors';

import * as S from './styles';

interface IIputValueReference {
  value: string;
}
interface ITextInputProps extends FloatingLabelProps {
  name: string;
}

const TextInput: React.FC<ITextInputProps> = ({ name, ...rest }) => {
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
    <S.Wrapper>
      <FloatingLabelInput
        {...rest}
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </S.Wrapper>
  );
};

export default TextInput;
