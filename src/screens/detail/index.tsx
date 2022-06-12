import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {HomeRoutes, StackNavigationProps} from '@core/types/navigation';
import {SharedElement} from 'react-navigation-shared-element';

import {Box, Button, Container, Text} from '@components';
import {useTheme} from '@shopify/restyle';

const {height} = Dimensions.get('screen');

const ProductDetailScreen = ({}: StackNavigationProps<
  HomeRoutes,
  'Detail'
>) => {
  const theme = useTheme();
  return (
    <Container background={theme.colors.white}>
      <Box
        style={StyleSheet.absoluteFill as object}
        height={height * 0.5}
        backgroundColor="white"
      />
      <SharedElement id="apple_watch">
        <Image
          source={require('../../assets/apple_watch.jpg')}
          style={styles.image}
        />
      </SharedElement>
      <Box
        backgroundColor="background"
        flex={1}
        borderTopLeftRadius="l"
        borderTopRightRadius="l"
        padding="s"
        paddingVertical="l">
        <Text variant="h2" textAlign="left" marginBottom="m">
          Apple Watch Series 7
        </Text>
        <Text variant="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil
          vero hic odio quidem, perspiciatis, quaerat, vitae aspernatur
          necessitatibus consequatur harum quos architecto nulla modi minima
          quam ipsam culpa labore.
        </Text>
        <Box
          marginVertical="l"
          flexDirection="row"
          justifyContent="space-between">
          <Text variant="paragraph" color="text">
            Precio:
          </Text>
          <Text variant="price" color="primary" fontSize={18}>
            $ 359 USD
          </Text>
        </Box>
        <Button label="Add to basket" variant="primary" onPress={() => {}} />
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: height * 0.4,
    resizeMode: 'cover',
  },
});

export default ProductDetailScreen;
