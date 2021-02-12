import React from 'react';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';

import * as S from './styles';

const TextInput: React.FC<FloatingLabelProps> = ({ label, ...rest }) => {
  return (
    <S.Wrapper>
      <FloatingLabelInput label={label} {...rest} />
    </S.Wrapper>
  );
};

export default TextInput;
