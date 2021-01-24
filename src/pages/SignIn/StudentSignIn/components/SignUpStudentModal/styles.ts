import styled from 'styled-components/native';

interface CreateAccontButtonTextProps {
  textColor: string;
}

export const CreateAccontModalButton = styled.TouchableOpacity`
  flex: 1;

  align-items: center;
`;

export const CreateAccontButtonText = styled.Text<CreateAccontButtonTextProps>`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  color: ${({ textColor }) => textColor};
`;
