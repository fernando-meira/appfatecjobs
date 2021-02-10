import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface IDefaultButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({
  children,
  backgroundColor,
  ...rest
}) => {
  return (
    <S.Wrapper backgroundColor={backgroundColor} {...rest}>
      {children}
    </S.Wrapper>
  );
};
export default DefaultButton;
