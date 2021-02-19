import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface IDefaultButtonProps extends TouchableOpacityProps {
  text: string;
  backgroundColor?: string;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({
  text,
  backgroundColor,
  ...rest
}) => {
  return (
    <S.Wrapper backgroundColor={backgroundColor} {...rest}>
      <S.TextButton>{text}</S.TextButton>
    </S.Wrapper>
  );
};
export default DefaultButton;
