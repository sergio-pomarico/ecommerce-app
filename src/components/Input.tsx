import React, {forwardRef, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

import {Box, Text} from '@components';
import {Icon} from '@config/icons';
import {useTheme} from '@config/theme';

interface InputProps extends TextInputProps {
  placeholder: string;
  onChanceText: (text: string) => void;
  icon?: string;
  error: string | undefined;
  touched: boolean | undefined;
  label: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({onChanceText, label, icon, ...props}, ref) => {
    const {value = '', touched, error, secureTextEntry} = props;
    const [text, setText] = useState<string>(value);
    const [hideText, setHideText] = useState<boolean | undefined>(
      secureTextEntry,
    );
    const theme = useTheme();

    const onChange = (input: string) => {
      setText(input);
      onChanceText(input);
    };

    return (
      <Box
        borderBottomWidth={StyleSheet.hairlineWidth}
        borderBottomColor={touched ? (error ? 'error' : 'primary') : 'grey'}
        alignItems="flex-start"
        width="100%"
        paddingVertical="s">
        <Box
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="flex-end"
          marginBottom="s">
          {icon && (
            <Icon
              name={icon}
              size={theme.spacing.m}
              color={theme.colors.darkGrey}
            />
          )}
          <Text marginLeft="xs" variant="label" color="darkGrey">
            {label}
          </Text>
        </Box>
        <Box flexDirection="row">
          <TextInput
            ref={ref}
            underlineColorAndroid="transparent"
            {...props}
            autoCapitalize="none"
            style={styles.input}
            onChangeText={onChange}
            secureTextEntry={hideText}
            {...{value: text}}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setHideText(prev => !prev)}>
              <Icon
                name={hideText ? 'show' : 'hide'}
                size={theme.spacing.m}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          )}
        </Box>
      </Box>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});

export default Input;
