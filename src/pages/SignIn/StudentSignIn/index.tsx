import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';
import { DefaultButton, Input } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const StudentSignIn: React.FC = () => {
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

          <S.TextTopWrapper>
            <S.Title>Vamos fazer seu login.</S.Title>
            <S.SubTitle>Bem-vindo de volta!</S.SubTitle>
          </S.TextTopWrapper>

          <S.InputWrapper>
            <Input
              name="RA"
              icon="user"
              placeholder="R.A"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />

            <Input
              icon="key"
              name="Senha"
              placeholder="Senha"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            />

            <S.ForgotPassword>
              <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
            </S.ForgotPassword>
          </S.InputWrapper>
        </S.TopContent>

        <S.CreateAccount onPress={() => navigation.navigate('StudentSignUp')}>
          <S.CreateAccountText marginRight>
            Não possui conta?
          </S.CreateAccountText>

          <S.CreateAccountText fontFamily="Poppins-SemiBold">
            Registre-se
          </S.CreateAccountText>
        </S.CreateAccount>

        <DefaultButton>
          <S.TextButton>Entrar</S.TextButton>
        </DefaultButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
