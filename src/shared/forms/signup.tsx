import React, {FC, useRef} from 'react';
import {TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, Button, Input, Link} from '@components';

interface SignUpFormProps {
  onSubmit: (form: object) => void;
  onPressLogin: () => void;
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
  passwordConfirmation: Yup.string()
    .required()
    .min(6)
    .max(16)
    .test('passwords-match', function (value) {
      return this.parent.password === value;
    }),
});

const SignUpForm: FC<SignUpFormProps> = ({onSubmit, onPressLogin}) => {
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
      passwordConfirmation: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: inputs => onSubmit(inputs),
  });
  const password = useRef<TextInput>(null);
  const passwordConfirmation = useRef<TextInput>(null);
  const {t} = useTranslation();
  return (
    <Box
      backgroundColor="white"
      padding="l"
      flex={1}
      borderTopRightRadius="l"
      borderTopLeftRadius="l"
      paddingVertical="xl">
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
        returnKeyLabel={t('auth.next')}
        onSubmitEditing={() => password.current?.focus()}
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
        onSubmitEditing={() => passwordConfirmation.current?.focus()}
      />
      <Input
        label={t('auth.repeat_password')}
        icon="lock"
        placeholder={t('auth.confirm_password')}
        value={values.passwordConfirmation}
        onChanceText={handleChange('passwordConfirmation')}
        touched={touched.passwordConfirmation}
        error={errors.passwordConfirmation}
        onBlur={handleBlur('passwordConfirmation')}
        secureTextEntry
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />
      <Box paddingVertical="s">
        <Button
          label={t('auth.sign_up')}
          onPress={handleSubmit}
          variant="primary"
          disabled={!(isValid && dirty)}
        />
      </Box>
      <Box paddingVertical="s">
        <Link
          onPress={onPressLogin}
          label={t('auth.have_account')}
          alignment="center"
        />
      </Box>
    </Box>
  );
};

export default SignUpForm;
