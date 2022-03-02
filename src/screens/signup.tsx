import React from 'react';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Box, Container, Text} from '@components';
import {useTheme} from '@config/theme';
import {StyleSheet} from 'react-native';
import SignUpForm from '@forms/signup';

const OnboardingScreen = ({}: StackNavigationProps<AuthRoutes, 'SignUp'>) => {
  const theme = useTheme();
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
      <SignUpForm onSubmit={() => {}} />
    </Container>
  );
};

export default OnboardingScreen;
