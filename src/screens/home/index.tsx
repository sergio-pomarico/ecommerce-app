import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeRoutes, StackNavigationProps} from '@core/types/navigation';
import {useTranslation} from 'react-i18next';

import {Tabs, Text} from '@components';

import {products, tabs} from './constanst';
import {Box} from '@atoms';
import ProductList from 'src/shared/components/ProductList';
import {Product} from '@core/models/product';

const HomeScreen = ({navigation}: StackNavigationProps<HomeRoutes, 'List'>) => {
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const goToDetail = (product: Product) =>
    navigation.navigate('Detail', {product});
  return (
    <Box backgroundColor="background" flex={1} style={{paddingTop: insets.top}}>
      <Box marginHorizontal="s">
        <Text variant="h1" textAlign="left" color="black" marginBottom="l">
          {t('home.title')}
        </Text>
      </Box>
      <Tabs {...{tabs}}>
        <ProductList data={products} onPressProduct={goToDetail} />
        <ProductList data={products} onPressProduct={goToDetail} />
        <ProductList data={products} onPressProduct={goToDetail} />
        <ProductList data={products} onPressProduct={goToDetail} />
      </Tabs>
    </Box>
  );
};

export default HomeScreen;
