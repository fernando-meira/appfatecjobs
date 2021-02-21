import styled from 'styled-components/native';
import { widthPercentageToDP as ww } from 'react-native-responsive-screen';

import colors from '~/themes/colors';

interface IWrapperProps {
  backgroundColor?: string;
}

interface ITextButtonProps {
  textColor?: string;
}

export const Wrapper = styled.TouchableOpacity<IWrapperProps>`
  height: 50px;
  min-width: 184px;
  border-radius: 8px;
  padding: ${ww(3)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.primaryColor};
`;

export const TextButton = styled.Text<ITextButtonProps>`
  text-align: center;
  font-size: ${ww(4.4)}px;
  color: ${({ textColor }) => textColor || colors.secondaryColor};
  font-family: 'Poppins-SemiBold';
`;
