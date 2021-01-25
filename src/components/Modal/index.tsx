import React from 'react';
import { Modal as NativeModal, ModalProps, View } from 'react-native';

import * as S from './styles';

interface IModalProps extends ModalProps {
  visible: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  footer,
  visible,
  children,
  ...rest
}) => {
  return (
    <S.Container>
      <NativeModal
        {...rest}
        transparent
        visible={visible}
        animationType="slide"
      >
        <S.Content>
          <S.ModalView>
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
