import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

import * as S from './styles';

const ProfileImage: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ProfileImage />

      <S.ChangeImageButton>
        <Icon name="camera" size={20} color={colors.primaryColor} />
      </S.ChangeImageButton>
    </S.Wrapper>
  );
};

export default ProfileImage;
