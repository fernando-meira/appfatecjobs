import React, { useEffect } from 'react';
import * as yup from 'yup';
import { Alert, SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';
import Logo from '~/themes/assets/svg/small-logo.svg';
import { DefaultButton, TextInput } from '~/components';

import * as S from './styles';

interface IFormProps {
  user: string;
  password: string;
}

const schema = yup.object().shape({
  user: yup.number().required(),
  password: yup.string().required(),
});

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();

  const { handleSubmit, register, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log('errors fora da function', errors);

  const onSubmit = (data: IFormProps) => {
    Alert.alert('VAII PORRA', 'APARECE ESSA MERDA');
  };

  useEffect(() => {
    register({ name: 'user' });
    register({ name: 'password' });
  }, [register]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.TopContent>
          <S.HeaderWrapper>
            <S.BackButton onPress={() => navigation.goBack()}>
              <Icon
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
              <TextInput
                label="R.A."
                value={value}
                maxLength={13}
                keyboardType="numeric"
                onChangeText={onChange}
                leftComponent={
                  <Icon
                    size={20}
                    name="user"
                    color={colors.placeholderTextColor}
                  />
                }
              />
            )}
          />
          <Text>{errors.user?.message}</Text>

          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
              <TextInput
                label="Senha"
                isPassword
                value={value}
                onChangeText={onChange}
                leftComponent={
                  <Icon
                    size={20}
                    name="lock"
                    color={colors.placeholderTextColor}
                  />
                }
                customShowPasswordComponent={
                  <Icon
                    size={20}
                    name="eye"
                    color={colors.placeholderTextColor}
                  />
                }
                customHidePasswordComponent={
                  <Icon
                    size={20}
                    name="eye-off"
                    color={colors.placeholderTextColor}
                  />
                }
              />
            )}
          />
          <Text>{errors.password?.message}</Text>

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
