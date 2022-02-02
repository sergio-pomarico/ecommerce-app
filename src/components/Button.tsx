import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {useTheme} from '@config/theme';
import {Text} from '@components';

interface ButtonProps {
  label?: string;
  variant: 'primary' | 'secondary' | 'blue';
  onPress: () => void;
  style?: ViewStyle;
}

const Button: FC<ButtonProps> = ({variant, label, onPress, style}) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'secondary'
      ? theme.colors.white
      : theme.colors.blue;
  const color =
    variant === 'primary' || variant === 'blue'
      ? theme.colors.white
      : theme.colors.primary;
  console.log(color);
  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor}]}
      onPress={onPress}>
      <Text style={{color}} variant="button">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 10,
    height: 70,
    justifyContent: 'center',
    width: '100%',
  },
});

export default Button;
