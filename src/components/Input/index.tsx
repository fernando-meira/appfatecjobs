/* eslint-disable react/require-default-props */
import React, { forwardRef } from 'react';

import { TextInputProps } from 'react-native';

import { widthPercentageToDP as ww } from 'react-native-responsive-screen';

import colors from '~/themes/colors';

import * as S from './styles';

interface IInputRef {
  focus(): void;
}

interface IInput extends TextInputProps {
  error?: string;
  password?: boolean;
  secureActive?: boolean;
  handleChangeSecurityVisibility?: () => void;
  marginBottom?: number;
  disabled?: boolean;
}

const Input: React.ForwardRefRenderFunction<IInputRef, IInput> = (
  {
    disabled,
    error,
    password,
    secureActive,
    handleChangeSecurityVisibility,
    marginBottom = 0,
    ...rest
  },
  ref,
) => {
  return (
    <S.Container marginBottom={marginBottom}>
      <S.Input {...rest} ref={ref} editable={!disabled} />

      {password && (
        <S.PasswordIconWrapper onPress={handleChangeSecurityVisibility}>
          <S.PasswordIcon
            size={ww(4)}
            color={colors.placeholderTextColor}
            name={secureActive ? 'eye' : 'eye-off'}
          />
        </S.PasswordIconWrapper>
      )}

      {!!error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
};

export default forwardRef(Input);
