import React, { useCallback, useState } from 'react';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';
import colors from '~/themes/colors';

interface ITextInputProps extends FloatingLabelProps {
  errors?: string;
  leftIconName?: string;
}

const TextInput: React.FC<ITextInputProps> = ({
  leftIconName,
  errors,
  ...rest
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!rest.value);
  }, [rest.value]);

  return (
    <S.Wrapper isFocused={isFocused} isErrored={!!errors} isFilled={isFilled}>
      <FloatingLabelInput
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        leftComponent={
          <Icon
            size={20}
            name={leftIconName || 'help-circle'}
            color={
              isFocused || isFilled
                ? colors.primaryColor
                : colors.placeholderTextColor
            }
          />
        }
        {...rest}
      />

      <S.ErrorText>{errors}</S.ErrorText>
    </S.Wrapper>
  );
};

export default TextInput;
