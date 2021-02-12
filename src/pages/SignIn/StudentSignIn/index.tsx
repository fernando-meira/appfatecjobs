import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '~/themes/colors';
import { DefaultButton, TextInput, Input } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

interface ISignInProps {
  user: string;
  password: string;
}

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSingIn = useCallback((data: ISignInProps) => {
    console.log(data);
  }, []);

  return (
    <KeyboardAwareScrollView>
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

            <Form onSubmit={handleSingIn} ref={formRef}>
              <Input name="user" icon="user" placeholder="R.A." />

              <Input name="password" icon="lock" placeholder="Senha" />

              {/* <TextInput
                name="user"
                label="R.A."
                maxLength={13}
                keyboardType="numeric"
                leftComponent={(
                  <FeatherIcon
                    size={20}
                    name="user"
                    color={colors.primaryColor}
                  />
                )}
              />

              <TextInput
                label="Senha"
                isPassword
                name="password"
                leftComponent={(
                  <FeatherIcon
                    size={20}
                    name="lock"
                    color={colors.primaryColor}
                  />
                )}
                customShowPasswordComponent={(
                  <FeatherIcon
                    size={20}
                    name="eye"
                    color={colors.placeholderTextColor}
                  />
                )}
                customHidePasswordComponent={(
                  <FeatherIcon
                    size={20}
                    name="eye-off"
                    color={colors.placeholderTextColor}
                  />
                )}
              /> */}
            </Form>

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

          <DefaultButton onPress={() => formRef.current?.submitForm()}>
            <S.TextButton>Entrar</S.TextButton>
          </DefaultButton>
        </S.Container>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default StudentSignIn;
