import React, {
  Component,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  View,
  StatusBar,
  TextInput,
  Animated,
  TextInputProps,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import colors from '~/themes/colors';

interface IFloatingLabelInputProps extends TextInputProps {
  label: string;
}

const FloatingLabelInput: React.FC<IFloatingLabelInputProps> = ({
  label,
  value,
  ...rest
}) => {
  const animatedIsFocus = useRef(new Animated.Value(0)).current;

  const [isFocused, setIsFocused] = useState(false);

  console.log(value);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    Animated.timing(animatedIsFocus, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, animatedIsFocus, value]);

  // useEffect(() => {
  //   console.log('inputElementRef.current');
  // }, [inputElementRef]);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: animatedIsFocus.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: animatedIsFocus.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: animatedIsFocus.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  return (
    <View style={{ paddingTop: 18 }}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        {...rest}
        style={{
          height: 26,
          fontSize: 20,
          color: '#000',
          borderBottomWidth: 1,
          borderBottomColor: '#555',
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
      />
    </View>
  );
};

interface IFormProps {
  user: string;
  password: string;
}

const Teste = () => {
  const { register, setValue, handleSubmit, control } = useForm();

  const onSubmit = (data: IFormProps) => console.log(data);

  useEffect(() => {
    register({ name: 'user' });
    register({ name: 'password' });
  }, [register]);

  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
      <StatusBar hidden />
      <Controller
        control={control}
        name="user"
        defaultValue=""
        render={({ onChange, value }) => (
          <FloatingLabelInput
            label="R.A."
            value={value}
            maxLength={13}
            keyboardType="numeric"
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ onChange, value }) => (
          <FloatingLabelInput
            label="Senha"
            textContentType="password"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{ backgroundColor: 'red', marginTop: 20 }}
      >
        <Text>FILHA DA PUTAAAAA</Text>
      </TouchableOpacity>

      {/* <FloatingLabelInput
        label="R.A."
        maxLength={13}
        keyboardType="numeric"
        onChangeText={text => setValue('user', text)}
      /> */}
    </View>
  );
};

export default Teste;
