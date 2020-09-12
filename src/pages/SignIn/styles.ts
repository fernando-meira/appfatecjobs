import styled from 'styled-components/native';

import colors from '../../themes/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 24px 0;

  font-size: 24px;
  font-family: 'Poppins-Regular';
  color: ${colors.primaryTextColor};
`;
