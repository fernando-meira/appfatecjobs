import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '~/themes/colors';
import { DefaultButton, Input, TextInput } from '~/components';
import Logo from '~/themes/assets/svg/small-logo.svg';

import * as S from './styles';

const StudentSignUp: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  console.log([name, user, email, password, confirmationPassword]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
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

            <View>
              <S.Title>Crie a conta estudantil.</S.Title>
            </View>

            <TextInput
              label="Nome"
              value={name}
              leftComponent={(
                <FeatherIcon
                  size={20}
                  name="user"
                  color={colors.primaryColor}
                />
              )}
              onChangeText={value => setName(value)}
            />

            <TextInput
              label="R.A."
              value={user}
              maxLength={13}
              keyboardType="numeric"
              leftComponent={
                <FeatherIcon size={20} name="key" color={colors.primaryColor} />
              }
              onChangeText={value => setUser(value)}
            />

            <TextInput
              value={email}
              label="E-mail"
              keyboardType="email-address"
              leftComponent={(
                <FeatherIcon
                  size={20}
                  name="mail"
                  color={colors.primaryColor}
                />
              )}
              onChangeText={value => setEmail(value)}
            />

            <TextInput
              isPassword
              label="Senha"
              value={password}
              onChangeText={value => setPassword(value)}
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
            />

            <TextInput
              isPassword
              label="Confirmar senha"
              value={confirmationPassword}
              onChangeText={value => setConfirmationPassword(value)}
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
            />
          </S.TopContent>

          <DefaultButton
            style={{ alignSelf: 'center', marginBottom: 20 }}
            onPress={() => navigation.navigate('CompletedStudentRegistration')}
          >
            <S.TextButton>Cadastrar</S.TextButton>
          </DefaultButton>
        </S.Container>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default StudentSignUp;
