import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  background: #34e3b8;
`;

export const ButtonText = styled.Text`
  color: #1d2433;
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
`;
