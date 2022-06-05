import React from 'react';
import {HomeRoutes, StackNavigationProps} from '@core/types/navigation';
import {useTranslation} from 'react-i18next';

import {Box, Container, ProductCard, Tabs, Text} from '@components';
import {useTheme} from '@shopify/restyle';

import {tabs} from './constanst';

const HomeScreen = ({navigation}: StackNavigationProps<HomeRoutes, 'List'>) => {
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <Container background={theme.colors.background}>
      <Box marginHorizontal="s">
        <Text variant="h1" textAlign="left">
          {t('home.title')}
        </Text>
      </Box>
      <Tabs {...{tabs}}>
        <>
          <ProductCard
            onPress={() =>
              navigation.navigate('Detail', {product: 'apple-watch'})
            }
          />
          <ProductCard
            onPress={() =>
              navigation.navigate('Detail', {product: 'apple-watch'})
            }
          />
          <ProductCard
            onPress={() =>
              navigation.navigate('Detail', {product: 'apple-watch'})
            }
          />
        </>
        <ProductCard
          onPress={() =>
            navigation.navigate('Detail', {product: 'apple-watch'})
          }
        />
        <ProductCard
          onPress={() =>
            navigation.navigate('Detail', {product: 'apple-watch'})
          }
        />
        <ProductCard
          onPress={() =>
            navigation.navigate('Detail', {product: 'apple-watch'})
          }
        />
      </Tabs>
    </Container>
  );
};

export default HomeScreen;
