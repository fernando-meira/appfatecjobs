import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';
import { Alert, SafeAreaView, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '~/themes/colors';
import Logo from '~/themes/assets/svg/small-logo.svg';
import { DefaultButton, TextInput } from '~/components';

import * as S from './styles';

interface IFormProps {
  user: string;
  password: string;
}

const schema = yup.object().shape({
  user: yup.number().required('R.A. obrigatório.'),
  password: yup
    .string()
    .required('Senha obrigatória.')
    .min(6, 'Mínimo seis caracteres.'),
});

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();
  const { handleSubmit, register, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [showKeyboard, setShowKeyboard] = useState(false);

  const onSubmit = (data: IFormProps) => {
    console.log('data', data);

    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    register({ name: 'user' });
    register({ name: 'password' });
  }, [register]);

  const keyboardDidShow = () => {
    setShowKeyboard(true);
  };

  const keyboardDidHide = () => {
    setShowKeyboard(false);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <KeyboardAwareScrollView>
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
              name="user"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  label="R.A."
                  value={value}
                  maxLength={13}
                  leftIconName="user"
                  autoCorrect={false}
                  returnKeyType="next"
                  keyboardType="numeric"
                  onChangeText={onChange}
                  errors={errors.user?.message}
                />
              )}
            />

            <Controller
              name="password"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  label="Senha"
                  isPassword
                  value={value}
                  leftIconName="lock"
                  returnKeyType="send"
                  onChangeText={onChange}
                  errors={errors.password?.message}
                  onSubmitEditing={handleSubmit(onSubmit)}
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

            {!showKeyboard && (
              <S.ForgotPassword
                onPress={() => navigation.navigate('StudentForgotPassword')}
              >
                <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
              </S.ForgotPassword>
            )}
          </S.TopContent>
        </KeyboardAwareScrollView>

        {!showKeyboard && (
          <S.CreateAccount onPress={() => navigation.navigate('StudentSignUp')}>
            <S.CreateAccountText marginRight>
              Não possui conta?
            </S.CreateAccountText>

            <S.CreateAccountText fontFamily="Poppins-SemiBold">
              Registre-se
            </S.CreateAccountText>
          </S.CreateAccount>
        )}

        <DefaultButton onPress={handleSubmit(onSubmit)} text="Entrar" />
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
