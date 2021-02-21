import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

import * as S from './styles';

interface IProfileListItemProps {
  iconName: string;
  description?: string;
  informationText: string;
}

const ProfileListItem: React.FC<IProfileListItemProps> = ({
  iconName,
  informationText,
  description,
}) => {
  return (
    <S.Wrapper>
      <Icon name={iconName} size={20} color={colors.primaryColor} />

      <S.TextWrapper>
        <S.InformationText>{informationText}</S.InformationText>
        {description && <S.Description>{description}</S.Description>}
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default ProfileListItem;
