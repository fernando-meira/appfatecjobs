import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  ProfileHeader,
  ProfileImage,
  DefaultButton,
  ProfileListItem,
} from '~/components';

import colors from '~/themes/colors';

import * as S from './styles';

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.TopContent>
          <ProfileHeader title="Meu perfil" />

          <ProfileImage />
        </S.TopContent>

        <S.MiddleContent>
          <ProfileListItem iconName="user" informationText="Fernando Meira" />

          <ProfileListItem
            iconName="briefcase"
            description="Atualmente"
            informationText="Frontend Developer na empresa"
          />

          <ProfileListItem
            iconName="at-sign"
            description="cursando"
            informationText="Análise e Desenvolvimento de
            Sistemas em Fatec Itapetininga"
          />

          <ProfileListItem
            iconName="smartphone"
            description="Contato principal"
            informationText="(15) 99826-6793"
          />

          <ProfileListItem iconName="home" informationText="Itapetininga" />
        </S.MiddleContent>

        <DefaultButton
          text="Editar perfil"
          textColor={colors.primaryColor}
          backgroundColor={colors.secondaryColor}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default Profile;
