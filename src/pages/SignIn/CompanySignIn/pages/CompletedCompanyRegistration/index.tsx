import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

const CompletedCompanyRegistration: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <FeatherIcon name="check" size={70} color="#34E3B8" />

      <S.TextWrapper>
        <S.MediumText>
          Cadastramento
          {'\n'}
          concluído
        </S.MediumText>
        <S.SmallText>Aguarde, entraremos em contato!</S.SmallText>
      </S.TextWrapper>

      <S.BackButton onPress={() => navigation.navigate('CompanySignIn')}>
        <S.TextButton>Ok</S.TextButton>
      </S.BackButton>
    </S.Container>
  );
};

export default CompletedCompanyRegistration;
