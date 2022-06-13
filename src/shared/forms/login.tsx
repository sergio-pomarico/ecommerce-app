import React, {FC, useRef} from 'react';
import {TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Button, Input, Link} from '@components';
import {Box} from '@atoms';

interface LoginFormProps {
  onSubmit: (form: {email: string; password: string}) => void;
  onPressForgot: () => void;
  onPressSignUp: () => void;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  onPressForgot,
  onPressSignUp,
}) => {
  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: inputs => onSubmit(inputs),
  });
  const password = useRef<TextInput>(null);
  const {t} = useTranslation();
  return (
    <Box
      backgroundColor="white"
      padding="l"
      flex={1}
      borderTopRightRadius="l"
      borderTopLeftRadius="l"
      paddingTop="xl">
      <Input
        label={t('common.email')}
        icon="message"
        placeholder={t('auth.add_email')}
        value={values.email}
        onChanceText={handleChange('email')}
        touched={touched.email}
        error={errors.email}
        onBlur={handleBlur('email')}
        returnKeyType="next"
        returnKeyLabel={t('common.next')}
        onSubmitEditing={() => password.current?.focus()}
        testID="input_email"
      />
      <Input
        label={t('common.password')}
        icon="lock"
        placeholder={t('auth.add_password')}
        value={values.password}
        onChanceText={handleChange('password')}
        touched={touched.password}
        error={errors.password}
        onBlur={handleBlur('password')}
        returnKeyType="next"
        returnKeyLabel={t('common.next')}
        secureTextEntry
        onSubmitEditing={handleSubmit}
        testID="input_password"
      />
      <Box paddingVertical="s">
        <Link
          onPress={onPressForgot}
          label={t('auth.forgot_password')}
          testID="btn_forgot_password"
        />
      </Box>
      <Box paddingVertical="s">
        <Button
          label={t('auth.login')}
          onPress={handleSubmit}
          variant="primary"
          disabled={!(isValid && dirty)}
          testID="btn_login"
        />
      </Box>
      <Box paddingVertical="s">
        <Link
          onPress={onPressSignUp}
          label={t('auth.dont_have_account')}
          alignment="center"
          testID="btn_sign_up"
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
