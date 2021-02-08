import styled from 'styled-components/native';

import colors from '~/themes/colors';

export const Container = styled.View`
  padding: 0 42px;

  flex: 1;
  align-items: center;
  justify-content: space-around;

  background: ${colors.background};
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${colors.primaryColor};
  font-family: 'Poppins-SemiBold';
`;

export const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.primaryColor};
  font-family: 'Poppins-Regular';
`;

export const StartButton = styled.TouchableOpacity`
  width: 184px;
  height: 50px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.primaryColor};
`;

export const StartButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
