import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as ww } from 'react-native-responsive-screen';

import colors from '~/themes/colors';
import { useAuth } from '~/hooks/auth';
import { DefaultButton } from '~/components';
import Logo from '~/themes/assets/svg/mid-logo.svg';

import * as S from './styles';

const StudentSignIn: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.HeaderWrapper>
          <S.Button onPress={() => navigation.goBack()}>
            <Icon size={24} name="corner-up-left" color={colors.primaryColor} />
          </S.Button>

          <S.Title>Meu perfil</S.Title>

          <S.Button
            onPress={() => {
              signOut();
              return navigation.navigate('StudentSignIn');
            }}
          >
            <Icon size={24} name="power" color={colors.primaryColor} />
          </S.Button>
        </S.HeaderWrapper>
        <S.Content>
          <Logo style={{ alignSelf: 'center' }} />

          <S.InfoWrapper>
            <S.ContentRow>
              <Icon
                size={24}
                name="user"
                color={colors.primaryColor}
                style={{ marginRight: ww(2) }}
              />

              <S.RegularText>{user?.nome || 'Sem informação.'}</S.RegularText>
            </S.ContentRow>

            <S.ContentRow>
              <Icon
                size={24}
                name="mail"
                color={colors.primaryColor}
                style={{ marginRight: ww(2) }}
              />

              <S.RegularText>{user?.email || 'Sem informação.'}</S.RegularText>
            </S.ContentRow>
            <S.ContentRow>
              <Icon
                size={24}
                name="phone"
                color={colors.primaryColor}
                style={{ marginRight: ww(2) }}
              />

              <S.RegularText>
                {user?.telefone || 'Sem informação.'}
              </S.RegularText>
            </S.ContentRow>

            <S.ContentRow>
              <Icon
                size={24}
                name="book"
                color={colors.primaryColor}
                style={{ marginRight: ww(2) }}
              />

              <S.RegularText>{user?.bio || 'Sem informação.'}</S.RegularText>
            </S.ContentRow>
          </S.InfoWrapper>
        </S.Content>

        <DefaultButton
          text="Editar Perfil"
          onPress={() =>
            Alert.alert(
              'Em breve!',
              'Estamos trabalhando nisso, logo poderá editar seu perfil! :) ',
            )
          }
          textColor={colors.primaryColor}
          backgroundColor={colors.secondaryColor}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default StudentSignIn;
