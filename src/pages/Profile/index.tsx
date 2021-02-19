import React from 'react';
import { SafeAreaView } from 'react-native';

import { ProfileHeader, ProfileImage, DefaultButton } from '~/components';

import * as S from './styles';

const Profile: React.FC = () => {
  return (
    <SafeAreaView>
      <S.Container>
        <ProfileHeader title="Meu perfil" />

        <ProfileImage />

        <DefaultButton text="Confirmar mudanças" />
      </S.Container>
    </SafeAreaView>
  );
};

export default Profile;
