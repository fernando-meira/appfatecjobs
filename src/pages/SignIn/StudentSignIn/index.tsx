import React from 'react';
import * as Yup from 'yup';
import { Alert, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';
import { DefaultButton, TextInput } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

interface IFormProps {
  user: string;
  password: string;
}

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();

  const { handleSubmit, control } = useForm();
  const onSubmit = (data: IFormProps) =>
    Alert.alert('Form Data', JSON.stringify(data));

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

          <Controller
            control={control}
            name="user"
            defaultValue=""
            render={({ onChange, value }) => (
              <>
                <TextInput
                  label="R.A."
                  maxLength={13}
                  value={value}
                  keyboardType="numeric"
                  onChangeText={onChange}
                  leftComponent={
                    <FeatherIcon
                      size={20}
                      name="user"
                      color={colors.placeholderTextColor}
                    />
                  }
                />
              </>
            )}
          />

          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ onChange, value }) => (
              <TextInput
                label="Senha"
                isPassword
                value={value}
                onChangeText={onChange}
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
            )}
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

        <DefaultButton onPress={handleSubmit(onSubmit)}>
          <S.TextButton>Entrar</S.TextButton>
        </DefaultButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
