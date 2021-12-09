import React from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import check from '~/themes/assets/json/check.json';

import * as S from './styles';

const CompletedStudentRegistration: React.FC = () => {
  const navigation = useNavigation();

  return (
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
            Cadastramento
            {'\n'}
            concluído
          </S.MediumText>
          <S.SmallText>
            Clique no botão Okay para ser redirecionado para a Home
          </S.SmallText>
        </S.TextWrapper>
      </S.TopContent>

      <S.BackButton onPress={() => navigation.navigate('Dashboard')}>
        <S.TextButton>Okay</S.TextButton>
      </S.BackButton>
    </S.Container>
  );
};

export default CompletedStudentRegistration;
