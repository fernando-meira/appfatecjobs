import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  Platform,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import colors from '~/themes/colors';
import ideaImage from '~/themes/assets/images/idea.png';

import { Input, Button, SelectionButton } from '~/components';

import * as S from './styles';

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();

  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

  const keyboardDidShow = () => {
    setKeyboardIsOpen(true);
  };

  const keyboardDidHide = () => {
    setKeyboardIsOpen(false);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <S.Container>
            <S.ReturnButtonWrapper>
              <SelectionButton
                width={60}
                iconName="chevrons-left"
                iconColor={colors.background}
                backgroundColor={colors.primaryColor}
                onPress={() => navigation.navigate('SelectionProfileType')}
              />
            </S.ReturnButtonWrapper>

            <S.ContentWrapper>
              <Image source={ideaImage} />

              <View>
                <S.Title>Login aluno</S.Title>
              </View>

              <Input name="RA" icon="user" placeholder="R.A." />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => console.log('Feito')}>Entrar</Button>

              <S.ForgotPassword
                onPress={() => console.log('Página de redefinição de senha')}
              >
                <S.ForgotPasswordText>Redefinir Senha</S.ForgotPasswordText>
              </S.ForgotPassword>
            </S.ContentWrapper>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {!keyboardIsOpen && (
        <S.CreateAccontButton
          onPress={() => {
            console.log('Redirecionado para criação da conta');
          }}
        >
          <S.CreateAccontButtonText>Criar conta</S.CreateAccontButtonText>
        </S.CreateAccontButton>
      )}
    </>
  );
};

export default StudentSignIn;
