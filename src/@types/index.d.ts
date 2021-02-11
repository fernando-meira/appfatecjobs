declare module '*.png';

declare module '*.svg' {
  import Svg from 'react-native-svg';

  const content: Svg;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}
