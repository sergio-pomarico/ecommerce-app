import React from 'react';
import {compose} from 'redux';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Box, Container, Loading, Text} from '@components';
import {useTheme} from '@config/theme';
import SignUpForm from '@forms/signup';
import {showLoading} from '@store/ui/actions';

const SignUpScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SignUp'>) => {
  const {navigate} = navigation;
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Container background={theme.colors.primary}>
      <Box
        style={StyleSheet.absoluteFill as object}
        backgroundColor="primary"
      />
      <Box paddingHorizontal="l" paddingVertical="xl">
        <Text variant="hero" textAlign="left">
          Create Account
        </Text>
      </Box>
      <SignUpForm
        onSubmit={() => dispatch(showLoading(true))}
        onPressLogin={() => navigate('Login')}
      />
    </Container>
  );
};

export default compose(Loading)(SignUpScreen);
