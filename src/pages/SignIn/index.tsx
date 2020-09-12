import React from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import ideaImage from '../../themes/assets/images/idea.png';
import { Input, Button } from '../../components';

import {
  Title,
  Container,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccontButton,
  CreateAccontButtonText,
} from './styles';

const SignIn: React.FC = () => {
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

            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccontButton>
        <CreateAccontButtonText>Criar conta</CreateAccontButtonText>
      </CreateAccontButton>
    </>
  );
};

export default SignIn;
