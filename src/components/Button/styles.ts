import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../themes/colors';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  margin-top: 8px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  background: ${colors.primaryColor};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.background};
  font-family: 'Poppins-SemiBold';
`;
