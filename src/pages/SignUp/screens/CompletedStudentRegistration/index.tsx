import React from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';
import check from '~/themes/assets/json/check.json';

import * as S from './styles';

const CompletedStudentRegistration: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Lottie
        autoPlay
        autoSize
        loop={false}
        source={check}
        resizeMode="contain"
      />

      <S.TextWrapper>
        <S.MediumText>
          Cadastramento
          {'\n'}
          concluído
        </S.MediumText>
        <S.SmallText>Agora é só fazer o login</S.SmallText>
      </S.TextWrapper>

      <S.BackButton onPress={() => navigation.navigate('StudentSignIn')}>
        <S.TextButton>Ok</S.TextButton>
      </S.BackButton>
    </S.Container>
  );
};

export default CompletedStudentRegistration;
