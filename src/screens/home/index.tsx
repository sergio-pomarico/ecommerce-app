import React from 'react';
import {AppRoutes, StackNavigationProps} from '@core/types/navigation';
import {Box, Container, Text} from '@components';
import {useTheme} from '@shopify/restyle';

const HomeScreen = ({}: StackNavigationProps<AppRoutes, 'Home'>) => {
  const theme = useTheme();
  return (
    <Container background={theme.colors.background}>
      <Box>
        <Text>Home</Text>
      </Box>
    </Container>
  );
};

export default HomeScreen;
