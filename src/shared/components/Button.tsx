import React, {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {useTheme, makeStyle, Theme} from '@config/theme';
import {Text} from '@atoms';

interface ButtonProps {
  label?: string;
  variant: 'primary' | 'secondary' | 'outline';
  onPress: () => void;
  style?: ViewStyle;
  size?: 'large' | 'medium';
  disabled?: boolean;
  testID?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  size = 'large',
  label,
  onPress,
  style,
  disabled = false,
  testID,
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
        disabled ? styles.disabled : {},
      ]}
      onPress={onPress}
      disabled={disabled}
      testID={testID}>
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
  disabled: {
    opacity: 0.75,
  },
}));

export default Button;
