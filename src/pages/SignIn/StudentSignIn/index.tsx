import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '~/themes/colors';
import { useAuth } from '~/hooks/auth';
import Logo from '~/themes/assets/svg/small-logo.svg';
import { DefaultButton, TextInput } from '~/components';

import * as S from './styles';

interface IFormProps {
  ra: string;
  senha: string;
}

const schema = yup.object().shape({
  ra: yup.number().required('R.A. obrigatório.'),
  senha: yup
    .string()
    .required('Senha obrigatória.')
    .min(6, 'Mínimo seis caracteres.'),
});

const StudentSignIn: React.FC = () => {
  const { loginLoading, signIn } = useAuth();
  const navigation = useNavigation();
  const { handleSubmit, register, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [showKeyboard, setShowKeyboard] = useState(false);

  const onSubmit = async (data: IFormProps) => {
    const isAuthenticated = await signIn(data.ra, data.senha);

    if (isAuthenticated) {
      return navigation.navigate('Dashboard');
    }
  };

  useEffect(() => {
    register({ name: 'ra' });
    register({ name: 'senha' });
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
              name="ra"
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
                  errors={errors.ra?.message}
                />
              )}
            />

            <Controller
              name="senha"
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
                  errors={errors.senha?.message}
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

        <DefaultButton
          onPress={handleSubmit(onSubmit)}
          text="Entrar"
          loading={loginLoading}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
