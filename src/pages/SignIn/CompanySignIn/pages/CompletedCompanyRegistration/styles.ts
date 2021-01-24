import styled from 'styled-components/native';

import colors from '~/themes/colors';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.View`
  margin-top: 16px;
  margin-bottom: 30px;

  align-items: center;
`;

export const MediumText = styled.Text`
  color: #f4ede8;
  font-size: 30px;
  text-align: center;
  font-family: 'Poppins-Regular';
`;

export const SmallText = styled.Text`
  color: #999591;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const BackButton = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.secondaryColor};
`;

export const TextButton = styled.Text`
  color: #ead4d8;
  font-family: 'Poppins-SemiBold';
`;
