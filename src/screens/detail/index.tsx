import React from 'react';
import {Image, Dimensions} from 'react-native';
import {HomeRoutes, StackNavigationProps} from '@core/types/navigation';
import {SharedElement} from 'react-navigation-shared-element';

import {Container} from '@components';
import {useTheme} from '@shopify/restyle';

const {height} = Dimensions.get('screen');

const ProductDetailScreen = ({}: StackNavigationProps<
  HomeRoutes,
  'Detail'
>) => {
  const theme = useTheme();
  return (
    <Container background={theme.colors.background}>
      <SharedElement id="apple_watch">
        <Image
          source={require('../../assets/apple_watch.jpg')}
          style={{
            width: undefined,
            height: height * 0.4,
          }}
        />
      </SharedElement>
    </Container>
  );
};

export default ProductDetailScreen;
