import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';
import { DefaultButton, Input } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const StudentSignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.TopContent>
          <S.HeaderWrapper>
            <S.BackButton onPress={() => navigation.goBack()}>
              <FeatherIcon
                size={24}
                name="corner-up-left"
                color={colors.primaryColor}
              />
            </S.BackButton>

            <Logo />
          </S.HeaderWrapper>

          <S.Title>Crie a conta estudantil.</S.Title>

          <S.InputWrapper>
            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />

            <Input
              icon="key"
              name="ra"
              placeholder="R.A"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />

            <Input
              icon="mail"
              name="email"
              placeholder="E-mail"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />

            <Input
              icon="lock"
              name="password"
              placeholder="E-mail"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />

            <Input
              icon="lock"
              name="confirm-password"
              placeholder="Confirmar senha"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />
          </S.InputWrapper>
        </S.TopContent>

        <DefaultButton
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('CompletedStudentRegistration')}
        >
          <S.TextButton>Cadastrar</S.TextButton>
        </DefaultButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignUp;
