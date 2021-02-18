import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import check from '~/themes/assets/json/check.json';

import * as S from './styles';

const PasswordRecoveryConfirmation: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.TopContent>
          <Lottie
            autoPlay
            autoSize
            loop={false}
            source={check}
            resizeMode="contain"
          />

          <S.TextWrapper>
            <S.MediumText>
              E-mail de recuperação
              {'\n'}
              de senha enviado!
            </S.MediumText>
            <S.SmallText>Verifique em sua caixa de entrada</S.SmallText>
          </S.TextWrapper>
        </S.TopContent>

        <S.BackButton onPress={() => navigation.navigate('StudentSignIn')}>
          <S.TextButton>Ok</S.TextButton>
        </S.BackButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default PasswordRecoveryConfirmation;
