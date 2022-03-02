import React, {FC, useRef} from 'react';
import {TextInput} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, Button, Input} from '@components';

interface SignUpFormProps {
  onSubmit: (arg0: object) => void;
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

const SignUpForm: FC<SignUpFormProps> = ({onSubmit}) => {
  const {values, handleChange, handleBlur, touched, errors, handleSubmit} =
    useFormik({
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
  return (
    <Box
      backgroundColor="white"
      padding="l"
      flex={1}
      borderTopRightRadius="l"
      borderTopLeftRadius="l"
      paddingTop="xl">
      <Input
        label="Email"
        icon="message"
        placeholder="Add your email"
        value={values.email}
        onChanceText={handleChange('email')}
        touched={touched.email}
        error={errors.email}
        onBlur={handleBlur('email')}
        returnKeyType="next"
        returnKeyLabel="Next"
        onSubmitEditing={() => password.current?.focus()}
      />
      <Input
        label="Password"
        icon="lock"
        placeholder="Enter your password"
        value={values.password}
        onChanceText={handleChange('password')}
        touched={touched.password}
        error={errors.password}
        onBlur={handleBlur('password')}
        returnKeyType="next"
        returnKeyLabel="Next"
        secureTextEntry
        onSubmitEditing={() => passwordConfirmation.current?.focus()}
      />
      <Input
        label="Repeat your password"
        icon="lock"
        placeholder="Confirm your password"
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
          label="Create your account"
          onPress={handleSubmit}
          variant="primary"
        />
      </Box>
    </Box>
  );
};

export default SignUpForm;
