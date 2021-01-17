import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Platform,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import ideaImage from '~/themes/assets/images/idea.png';

import { Input, Button } from '~/components';

import {
  Title,
  Container,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccontButton,
  CreateAccontButtonText,
} from './styles';

const SignIn: React.FC = () => {
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
          <Container>
            <Image source={ideaImage} />

            <View>
              <Title>Faça seu login</Title>
            </View>

            <Input name="RA" icon="user" placeholder="R.A." />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => console.log('Feito')}>Entrar</Button>

            <ForgotPassword
              onPress={() => console.log('Página de redefinição de senha')}
            >
              <ForgotPasswordText>Redefinir Senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {!keyboardIsOpen && (
        <CreateAccontButton
          onPress={() => {
            console.log('Redirecionado para criação da conta');
          }}
        >
          <CreateAccontButtonText>Criar conta</CreateAccontButtonText>
        </CreateAccontButton>
      )}
    </>
  );
};

export default SignIn;
