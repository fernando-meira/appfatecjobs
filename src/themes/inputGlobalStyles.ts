import { setGlobalStyles } from 'react-native-floating-label-input';

import colors from './colors';

setGlobalStyles.containerStyles = {
  height: 50,
  borderWidth: 1,
  borderRadius: 8,
  paddingLeft: 8,
  paddingRight: 8,
  backgroundColor: colors.white,
  borderColor: colors.primaryColor,
};

setGlobalStyles.customLabelStyles = {
  fontSizeBlurred: 16,
  colorFocused: colors.placeholderTextColor,
  colorBlurred: colors.placeholderTextColor,
};

setGlobalStyles.inputStyles = {
  marginTop: 8,
  paddingLeft: 5,

  fontSize: 16,
  color: colors.primaryColor,
};
