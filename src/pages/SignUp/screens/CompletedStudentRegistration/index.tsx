import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';

import * as S from './styles';

const CompletedStudentRegistration: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <FeatherIcon name="check" size={70} color={colors.primaryColor} />

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
