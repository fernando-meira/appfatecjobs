import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ButtonProps {
  width?: string;
  backgroundColor: string;
}

interface TextColorProps {
  textColor: string;
}

export const Container = styled.View`
  margin-top: 16px;

  align-items: center;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 60px;
  margin-right: 8px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: ${({ width }) => width || 90}px;

  align-items: center;
  flex-direction: row;
  justify-content: flex-end;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Text = styled.Text<TextColorProps>`
  color: ${({ textColor }) => textColor || 'transparent'};
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
`;
