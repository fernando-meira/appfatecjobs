import React from 'react';
import { Modal as NativeModal, View, Alert } from 'react-native';

import * as S from './styles';

interface ModalProps {
  visible: boolean;
  minHeight?: number;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  footer,
  minHeight,
}) => {
  return (
    <S.Container>
      <NativeModal
        transparent
        animationType="slide"
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <S.Content>
          <S.ModalView minHeight={minHeight}>
            <S.Title>Crie sua conta</S.Title>
            <View>{children}</View>
          </S.ModalView>

          {footer && <S.Footer>{footer}</S.Footer>}
        </S.Content>
      </NativeModal>
    </S.Container>
  );
};

export default Modal;
