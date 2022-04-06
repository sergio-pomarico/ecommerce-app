import React, {FC, useRef} from 'react';
import {TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, Button, Input, Link} from '@components';

interface LoginFormProps {
  onSubmit: (form: {email: string; password: string}) => void;
  onPressForgot: () => void;
  onPressCreate: () => void;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  onPressForgot,
  onPressCreate,
}) => {
  const {values, handleChange, handleBlur, touched, errors, handleSubmit} =
    useFormik({
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
        placeholder={t('auth.addEmail')}
        value={values.email}
        onChanceText={handleChange('email')}
        touched={touched.email}
        error={errors.email}
        onBlur={handleBlur('email')}
        returnKeyType="next"
        returnKeyLabel={t('common.next')}
        onSubmitEditing={() => password.current?.focus()}
      />
      <Input
        label={t('common.password')}
        icon="lock"
        placeholder={t('auth.addPassword')}
        value={values.password}
        onChanceText={handleChange('password')}
        touched={touched.password}
        error={errors.password}
        onBlur={handleBlur('password')}
        returnKeyType="next"
        returnKeyLabel={t('common.next')}
        secureTextEntry
        onSubmitEditing={handleSubmit}
      />
      <Box paddingVertical="s">
        <Link onPress={onPressForgot} label={t('auth.forgotPassword')} />
      </Box>
      <Box paddingVertical="s">
        <Button
          label={t('auth.login')}
          onPress={handleSubmit}
          variant="primary"
        />
      </Box>
      <Box paddingVertical="s">
        <Link
          onPress={onPressCreate}
          label={t('auth.dontHaveAccount')}
          alignment="center"
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
