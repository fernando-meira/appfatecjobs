import React, { useEffect, useCallback, useState } from 'react';
import * as yup from 'yup';
import { SafeAreaView, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '~/themes/colors';
import { api } from '~/services/api';
import { useAuth } from '~/hooks/auth';
import Logo from '~/themes/assets/svg/small-logo.svg';
import { DefaultButton, TextInput } from '~/components';

import * as S from './styles';
import { RegisterStudentResponse } from '~/interfaces/Register';

interface IFormProps {
  ra: number;
  bio: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório.'),
  ra: yup.number().required('R.A. obrigatório.'),
  email: yup
    .string()
    .required('E-mail obrigatótio.')
    .email('Digite um e-mail válido.'),
  telefone: yup.string(),
  bio: yup.string(),
  senha: yup.string().required('Senha obrigatória.'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha obrigatória.')
    .oneOf([yup.ref('senha'), null], 'As senhas devem corresponder.'),
});

const StudentSignUp: React.FC = () => {
  const { setUser } = useAuth();

  const navigation = useNavigation();
  const { errors, handleSubmit, register, control } = useForm({
    resolver: yupResolver(schema),
  });

  const [registerLoading, setRegisterLoading] = useState(false);

  const singUp = useCallback(
    async (formFields: IFormProps) => {
      try {
        setRegisterLoading(true);

        const { data } = await api.post<RegisterStudentResponse>('aluno', {
          ...formFields,
        });

        if (data.response.success === 'true') {
          setUser(data.response.data[0]);

          return true;
        }
      } catch (error) {
        Alert.alert(
          'Erro no cadastro',
          'Verifique os dados e tente novamente!',
        );

        return false;
      } finally {
        setRegisterLoading(false);
      }
    },
    [setUser],
  );

  const onSubmit = async (data: IFormProps) => {
    const isRegistered = await singUp(data);

    if (isRegistered) {
      navigation.navigate('CompletedStudentRegistration');
    }
  };

  useEffect(() => {
    register({ name: 'nome' });
    register({ name: 'ra' });
    register({ name: 'email' });
    register({ name: 'telefone' });
    register({ name: 'bio' });
    register({ name: 'senha' });
    register({ name: 'confirmPassword' });
  }, [register]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
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

            <View>
              <S.Title>Crie sua conta</S.Title>
            </View>

            <Controller
              name="nome"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  label="Nome"
                  value={value}
                  leftIconName="user"
                  errors={errors.nome?.message}
                  onChangeText={onChange}
                />
              )}
            />

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
              name="bio"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  label="Biografia"
                  value={value}
                  leftIconName="book"
                  autoCorrect={false}
                  returnKeyType="next"
                  onChangeText={onChange}
                  errors={errors.bio?.message}
                />
              )}
            />

            <Controller
              name="telefone"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  value={value}
                  maxLength={11}
                  label="Telefone"
                  leftIconName="phone"
                  autoCorrect={false}
                  returnKeyType="next"
                  mask="(99)99999-9999"
                  onChangeText={onChange}
                  errors={errors.telefone?.message}
                />
              )}
            />

            <Controller
              name="email"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  label="E-mail"
                  value={value}
                  leftIconName="mail"
                  autoCorrect={false}
                  returnKeyType="next"
                  onChangeText={onChange}
                  errors={errors.email?.message}
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
                  returnKeyType="next"
                  onChangeText={onChange}
                  errors={errors.senha?.message}
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

            <Controller
              name="confirmPassword"
              defaultValue=""
              control={control}
              render={({ onChange, value }) => (
                <TextInput
                  label="Confirmar senha"
                  isPassword
                  value={value}
                  leftIconName="lock"
                  returnKeyType="send"
                  onChangeText={onChange}
                  errors={errors.confirmPassword?.message}
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
          </S.TopContent>

          <DefaultButton
            text="Cadastrar"
            loading={registerLoading}
            style={{ alignSelf: 'center' }}
            onPress={handleSubmit(onSubmit)}
          />
        </S.Container>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default StudentSignUp;
