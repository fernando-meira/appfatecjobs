import styled from 'styled-components/native';

import colors from '~/themes/colors';

interface IWrapperProps {
  backgroundColor?: string;
}

export const Wrapper = styled.TouchableOpacity<IWrapperProps>`
  width: 184px;
  height: 50px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.primaryColor};
`;
