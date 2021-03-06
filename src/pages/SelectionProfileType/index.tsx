import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SelectionButton } from '~/components';
import circle from '~/themes/assets/images/circle.png';
import selectionImage from '~/themes/assets/images/selection.png';

import colors from '~/themes/colors';

import * as S from './styles';

const SelectionProfileType: React.FC = () => {
  const navigation = useNavigation();

  const navigateToAnotherScreen = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <S.Container>
          <S.ImageAbsolute source={circle} />
          <Image source={selectionImage} />

          <S.Content>
            <S.Text>
              Aluno Fatec, nessa plataforma você encontrará as melhores
              oportunidades.
            </S.Text>

            <View>
              <SelectionButton
                width="86"
                iconName="user"
                textColor={colors.secondaryColor}
                iconColor={colors.textColor}
                backgroundColor={colors.secondaryColor}
                onPress={() => navigateToAnotherScreen('StudentSignIn')}
              >
                Sou aluno
              </SelectionButton>

              <SelectionButton
                width="126"
                iconName="users"
                textColor={colors.textColor}
                iconColor={colors.secondaryColor}
                backgroundColor={colors.textColor}
                onPress={() => navigateToAnotherScreen('CompanySignIn')}
              >
                Sou empresa
              </SelectionButton>
            </View>
          </S.Content>
        </S.Container>
      </ScrollView>
    </>
  );
};

export default SelectionProfileType;
