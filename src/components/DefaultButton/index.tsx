import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import * as S from './styles';
import colors from '~/themes/colors';

interface IDefaultButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({
  text,
  loading,
  textColor,
  backgroundColor,
  ...rest
}) => {
  return (
    <S.Wrapper activeOpacity={0.8} backgroundColor={backgroundColor} {...rest}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <S.TextButton textColor={textColor}>{text}</S.TextButton>
      )}
    </S.Wrapper>
  );
};
export default DefaultButton;
