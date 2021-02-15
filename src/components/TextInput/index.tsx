import React from 'react';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';

import * as S from './styles';

const TextInput: React.FC<FloatingLabelProps> = ({ ...rest }) => {
  return (
    <S.Wrapper>
      <FloatingLabelInput {...rest} />
    </S.Wrapper>
  );
};

export default TextInput;
