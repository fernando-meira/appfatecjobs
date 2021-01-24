import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import colors from '~/themes/colors';
import { Modal, Input } from '~/components';

import * as S from './styles';

interface SignUpStudentModalProps {
  modalVisible: boolean;
  setModalVisible: (param: boolean) => void;
}

const SignUpCompanyModal: React.FC<SignUpStudentModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const navigation = useNavigation();

  const handleCreatedAccount = useCallback(() => {
    setModalVisible(false);
    navigation.navigate('CompletedCompanyRegistration');
  }, [navigation, setModalVisible]);

  return (
    <Modal
      visible={modalVisible}
      footer={(
        <>
          <S.CreateAccontModalButton onPress={handleCreatedAccount}>
            <S.CreateAccontButtonText textColor={colors.primaryColor}>
              Criar conta
            </S.CreateAccontButtonText>
          </S.CreateAccontModalButton>

          <S.CreateAccontModalButton
            onPress={() => setModalVisible(!modalVisible)}
          >
            <S.CreateAccontButtonText textColor={colors.secondaryColor}>
              Cancelar
            </S.CreateAccontButtonText>
          </S.CreateAccontModalButton>
        </>
      )}
    >
      <Input
        name="name"
        icon="user"
        placeholder="Nome da empresa"
        backgroundColor={colors.background}
      />
      <Input
        name="adress"
        icon="home"
        placeholder="Endereço"
        backgroundColor={colors.background}
      />
      <Input
        name="email"
        icon="mail"
        placeholder="E-mail"
        backgroundColor={colors.background}
      />

      <Input
        name="phone"
        icon="phone"
        placeholder="Telefone"
        backgroundColor={colors.background}
      />
      <Input
        name="cnpj"
        icon="file-text"
        placeholder="CNPJ"
        backgroundColor={colors.background}
      />

      <Input
        name="password"
        icon="lock"
        placeholder="Senha"
        backgroundColor={colors.background}
      />
      <Input
        name="password-confirmation"
        icon="lock"
        placeholder="Confirmar senha"
        backgroundColor={colors.background}
      />
    </Modal>
  );
};

export default SignUpCompanyModal;
