import styled from 'styled-components/native';

import colors from '~/themes/colors';

export const Wrapper = styled.TouchableWithoutFeedback`
  width: 184px;
  height: 50px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.primaryColor};
`;
