import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface SelectionButtonProps extends TouchableOpacityProps {
  width?: number;
  iconName: string;
  iconColor: string;
  textColor?: string;
  backgroundColor: string;
  children?: React.ReactNode;
}

const SelectionButtom: React.FC<SelectionButtonProps> = ({
  width,
  iconName,
  children,
  textColor,
  iconColor,
  backgroundColor,
  ...rest
}) => {
  return (
    <S.Container>
      <S.Button width={width} backgroundColor={backgroundColor} {...rest}>
        <S.Icon name={iconName} color={iconColor} size={24} />
      </S.Button>

      {children && <S.Text textColor={textColor}>{children}</S.Text>}
    </S.Container>
  );
};

export default SelectionButtom;
