import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';
import { DefaultButton, TextInput } from '~/components';
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

          <TextInput
            label="R.A."
            maxLength={13}
            keyboardType="numeric"
            leftComponent={
              <FeatherIcon
                size={20}
                name="user"
                color={colors.placeholderTextColor}
              />
            }
          />

          <TextInput
            label="Senha"
            isPassword
            leftComponent={
              <FeatherIcon
                size={20}
                name="lock"
                color={colors.placeholderTextColor}
              />
            }
            customShowPasswordComponent={
              <FeatherIcon
                size={20}
                name="eye"
                color={colors.placeholderTextColor}
              />
            }
            customHidePasswordComponent={
              <FeatherIcon
                size={20}
                name="eye-off"
                color={colors.placeholderTextColor}
              />
            }
          />

          <S.ForgotPassword>
            <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
          </S.ForgotPassword>
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
