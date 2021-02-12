import { setGlobalStyles } from 'react-native-floating-label-input';

import colors from './colors';

setGlobalStyles.containerStyles = {
  height: 50,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: colors.primaryColor,
};

setGlobalStyles.customLabelStyles = {
  fontSizeBlurred: 16,
  colorFocused: colors.placeholderTextColor,
  colorBlurred: colors.placeholderTextColor,
};

setGlobalStyles.inputStyles = {
  marginTop: 8,
  paddingLeft: 6,

  fontSize: 16,
  color: colors.primaryColor,
};
