import React, {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {useTheme, makeStyle, Theme} from '@config/theme';
import {Text} from '@components';

interface ButtonProps {
  label?: string;
  variant: 'primary' | 'secondary' | 'outline';
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
  const styles = useStyles();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.white;
  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.primary;
  const maxHeight = size === 'medium' ? 50 : 70;
  const width = size === 'medium' ? undefined : '100%';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {backgroundColor, maxHeight, width},
        variant === 'outline' ? styles.border : {},
      ]}
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

const useStyles = makeStyle((theme: Theme) => ({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 10,
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
  border: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
}));

export default Button;
