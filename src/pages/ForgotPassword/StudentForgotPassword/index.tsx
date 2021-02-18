import React, { useCallback, useEffect } from 'react';
import * as yup from 'yup';
import { Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';
import { TextInput, DefaultButton } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const schema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});

const StudentForgotPassword: React.FC = () => {
  const navigation = useNavigation();

  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(data => {
    console.log('formData', data);

    Alert.alert('Emial de recuperação enviado');
  }, []);

  useEffect(() => {
    register({ name: 'email' });
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
            <S.Title>Recuperação de senha.</S.Title>

            <S.SubTitle>Precisamos do seu e-mail!</S.SubTitle>
          </S.TextTopWrapper>
        </S.TopContent>

        <S.Form>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
              <TextInput
                label="Digite seu e-mail"
                value={value}
                leftIconName="mail"
                autoCorrect={false}
                returnKeyType="send"
                onChangeText={onChange}
                errors={errors.email?.message}
              />
            )}
          />
        </S.Form>

        <DefaultButton onPress={handleSubmit(onSubmit)}>
          <S.TextButton>Recuperar</S.TextButton>
        </DefaultButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentForgotPassword;
