import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import * as S from './styles';

interface IDefaultButtonProps extends TouchableWithoutFeedbackProps {
  children: React.ReactNode;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({
  children,
  ...rest
}) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
};
export default DefaultButton;
