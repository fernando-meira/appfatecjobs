import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

import * as S from './styles';

interface IProfileHeader {
  title: string;
}

const ProfileHeader: React.FC<IProfileHeader> = ({ title }) => {
  return (
    <S.Header>
      <S.HeaderButton>
        <Icon name="arrow-left" size={20} color={colors.primaryColor} />
      </S.HeaderButton>

      <S.Title>{title}</S.Title>

      <S.HeaderButton>
        <Icon name="power" size={20} color={colors.primaryColor} />
      </S.HeaderButton>
    </S.Header>
  );
};

export default ProfileHeader;
