import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface IDefaultButtonProps extends TouchableOpacityProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  ...rest
}) => {
  return (
    <S.Wrapper backgroundColor={backgroundColor} {...rest}>
      <S.TextButton textColor={textColor}>{text}</S.TextButton>
    </S.Wrapper>
  );
};
export default DefaultButton;
