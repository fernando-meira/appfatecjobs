import styled from 'styled-components/native';

import colors from '../../themes/colors';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;

  background: ${colors.inputColor};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.inputTextColor};
`;
