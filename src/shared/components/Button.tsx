import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {useTheme} from '@config/theme';
import {Text} from '@components';

interface ButtonProps {
  label?: string;
  variant: 'primary' | 'secondary' | 'blue';
  onPress: () => void;
  style?: ViewStyle;
  size?: 'large' | 'medium';
}

const Button: FC<ButtonProps> = ({
  variant,
  size = 'large',
  label,
  onPress,
  style,
}) => {
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
  const width = size === 'medium' ? 225 : '100%';
  const height = size === 'medium' ? 50 : 70;

  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor, height, width}]}
      onPress={onPress}>
      <Text
        style={{color}}
        variant={size === 'medium' ? 'button_medium' : 'button_large'}>
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
  },
});

export default Button;
