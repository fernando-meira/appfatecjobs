import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';
import { DefaultButton, Input, TextInput } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();

  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

  const keyboardDidShow = useCallback(() => {
    setKeyboardIsOpen(true);
  }, []);

  const keyboardDidHide = useCallback(() => {
    setKeyboardIsOpen(false);
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, [keyboardDidShow, keyboardDidHide]);

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
            <TextInput label="R.A." />

            <TextInput label="Senha" isPassword />

            {/* <TextInput
              icon="key"
              name="Senha"
              placeholder="Senha"
              backgroundColor={colors.white}
              borderColor={colors.primaryColor}
            /> */}

            <S.ForgotPassword>
              <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
            </S.ForgotPassword>
          </S.InputWrapper>
        </S.TopContent>

        {!keyboardIsOpen && (
          <>
            <S.CreateAccount
              onPress={() => navigation.navigate('StudentSignUp')}
            >
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
          </>
        )}
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
