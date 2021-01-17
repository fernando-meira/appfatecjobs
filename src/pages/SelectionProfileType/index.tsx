import React from 'react';
import { ScrollView, Image } from 'react-native';

import selectionImage from '../../themes/assets/images/selection.png';

import * as S from './styles';

const SelectionProfileType: React.FC = () => {
  return (
    <>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <S.Container>
          <Image source={selectionImage} />

          <S.Content>
            <S.Text>
              Aluno Fatec, nessa plataforma você encontrará as melhores
              oportunidades.
            </S.Text>
          </S.Content>
        </S.Container>
      </ScrollView>
    </>
  );
};

export default SelectionProfileType;
