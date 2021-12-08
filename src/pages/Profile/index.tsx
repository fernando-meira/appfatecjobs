import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as ww } from 'react-native-responsive-screen';

import colors from '~/themes/colors';
import { DefaultButton } from '~/components';
import Logo from '~/themes/assets/svg/mid-logo.svg';

import * as S from './styles';

const StudentSignIn: React.FC = () => {
  const navigation = useNavigation();

  const renderContent = useMemo(
    () => [
      {
        description: 'Fernando Meira',
        icon: 'user',
      },
      {
        description: 'thomwork@outlook.com',
        icon: 'mail',
      },
      {
        description: '(15)99826-6793',
        icon: 'phone',
      },
      {
        description: 'biografia',
        icon: 'book',
      },
    ],
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.HeaderWrapper>
          <S.Button onPress={() => navigation.goBack()}>
            <Icon size={24} name="corner-up-left" color={colors.primaryColor} />
          </S.Button>

          <S.Title>Meu perfil</S.Title>

          <S.Button onPress={() => console.log('deslogar')}>
            <Icon size={24} name="power" color={colors.primaryColor} />
          </S.Button>
        </S.HeaderWrapper>
        <S.Content>
          <Logo style={{ alignSelf: 'center' }} />

          <S.InfoWrapper>
            {renderContent.map(item => (
              <S.ContentRow>
                <Icon
                  size={24}
                  name={item.icon}
                  color={colors.primaryColor}
                  style={{ marginRight: ww(2) }}
                />

                <S.RegularText>{item.description}</S.RegularText>
              </S.ContentRow>
            ))}
          </S.InfoWrapper>
        </S.Content>

        <DefaultButton
          text="Editar Perfil"
          textColor={colors.primaryColor}
          backgroundColor={colors.secondaryColor}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
