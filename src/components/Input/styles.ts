import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;

  align-items: center;
  flex-direction: row;
  justify-content: center;

  background: ${colors.inputColor};
`;

export const TextInput = styled.TextInput`
  margin-top: 8px;

  flex: 1;

  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${colors.inputTextColor};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;
