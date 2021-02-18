import React, { useCallback, useEffect, useMemo } from 'react';
import * as yup from 'yup';
import { SafeAreaView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller, ControllerRenderProps } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '~/themes/colors';
import { DefaultButton, TextInput } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

interface IFormProps {
  name: string;
  user: number;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  user: yup.number().required('R.A. obrigatório.'),
  email: yup
    .string()
    .required('E-mail obrigatótio.')
    .email('Digite um e-mail válido.'),
  password: yup.string().required('Senha obrigatória.'),
  passwordConfirmation: yup
    .string()
    .required('Confirmação de senha obrigatória.')
    .oneOf([yup.ref('password'), null], 'As senhas devem corresponder.'),
});

const StudentSignUp: React.FC = () => {
  const navigation = useNavigation();
  const { errors, handleSubmit, register, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data: IFormProps) => {
      console.log('data', data);

      navigation.navigate('CompletedStudentRegistration');
    },
    [navigation],
  );

  const fieldNames = useMemo(
    () => ['name', 'user', 'email', 'password', 'passwordConfirmation'],
    [],
  );

  useEffect(() => {
    fieldNames.map(fieldName => register({ name: fieldName }));
  }, [fieldNames, register]);

  const renderField = useMemo(
    () => ({
      name: ({ value, onChange }: ControllerRenderProps) => (
        <TextInput
          label="Nome"
          value={value}
          leftIconName="user"
          errors={errors.name?.message}
          onChangeText={onChange}
        />
      ),
      ra: ({ value, onChange }: ControllerRenderProps) => (
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
      ),
      email: ({ onChange, value }: ControllerRenderProps) => (
        <TextInput
          label="E-mail"
          value={value}
          leftIconName="mail"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={onChange}
          errors={errors.email?.message}
        />
      ),
      password: ({ onChange, value }: ControllerRenderProps) => (
        <TextInput
          label="Senha"
          isPassword
          value={value}
          leftIconName="lock"
          returnKeyType="next"
          onChangeText={onChange}
          errors={errors.password?.message}
          customShowPasswordComponent={
            <Icon size={20} name="eye" color={colors.placeholderTextColor} />
          }
          customHidePasswordComponent={
            <Icon
              size={20}
              name="eye-off"
              color={colors.placeholderTextColor}
            />
          }
        />
      ),
      passwordConfirmation: ({ onChange, value }: ControllerRenderProps) => (
        <TextInput
          label="Confirmar senha"
          isPassword
          value={value}
          leftIconName="lock"
          returnKeyType="send"
          onChangeText={onChange}
          errors={errors.passwordConfirmation?.message}
          onSubmitEditing={handleSubmit(onSubmit)}
          customShowPasswordComponent={
            <Icon size={20} name="eye" color={colors.placeholderTextColor} />
          }
          customHidePasswordComponent={
            <Icon
              size={20}
              name="eye-off"
              color={colors.placeholderTextColor}
            />
          }
        />
      ),
    }),
    [errors, handleSubmit, onSubmit],
  );

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
              <S.Title>Crie a conta estudantil.</S.Title>
            </View>

            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={renderField.name}
            />

            <Controller
              name="user"
              defaultValue=""
              control={control}
              render={renderField.ra}
            />

            <Controller
              name="email"
              defaultValue=""
              control={control}
              render={renderField.email}
            />

            <Controller
              name="password"
              defaultValue=""
              control={control}
              render={renderField.password}
            />

            <Controller
              name="passwordConfirmation"
              defaultValue=""
              control={control}
              render={renderField.passwordConfirmation}
            />
          </S.TopContent>

          <DefaultButton
            style={{ alignSelf: 'center', marginBottom: 20 }}
            onPress={handleSubmit(onSubmit)}
          >
            <S.TextButton>Cadastrar</S.TextButton>
          </DefaultButton>
        </S.Container>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default StudentSignUp;
