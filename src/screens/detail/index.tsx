import React, {useCallback} from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';

import {HomeRoutes, StackNavigationProps} from '@core/types/navigation';
import {Button, Container, Text} from '@components';
import {useTheme} from '@shopify/restyle';
import {AnimatedBox, Box} from '@atoms';
import {generarteSnapPoint} from '@utils/animations';

const {height} = Dimensions.get('screen');

const ProductDetailScreen = ({
  route,
  navigation,
}: StackNavigationProps<HomeRoutes, 'Detail'>) => {
  const theme = useTheme();
  const {product} = route.params;
  const {id, name, price, description} = product;

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const isGestureActive = useSharedValue(false);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isGestureActive.value = true;
    },
    onActive: ({translationX, translationY}) => {
      translateX.value = translationX;
      translateY.value = translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      const goBack =
        generarteSnapPoint(translateY.value, velocityY, [0, height]) === height;
      if (goBack) {
        runOnJS(navigateBack)();
      } else {
        translateX.value = withSpring(0, {velocity: velocityX});
        translateY.value = withSpring(0, {velocity: velocityY});
      }
      isGestureActive.value = false;
    },
  });

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      flex: 1,
      transform: [
        {translateX: translateX.value * scale},
        {translateY: translateY.value * scale},
        {scale},
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <AnimatedBox style={style}>
        <Container background={theme.colors.white}>
          <Box
            style={StyleSheet.absoluteFill as object}
            height={height * 0.5}
            backgroundColor="white"
          />
          <SharedElement id={id}>
            <Image
              source={require('@assets/img/apple_watch.jpg')}
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
              {name}
            </Text>
            <Text variant="paragraph">{description}</Text>
            <Box
              marginVertical="l"
              flexDirection="row"
              justifyContent="space-between">
              <Text variant="paragraph" color="text">
                Precio:
              </Text>
              <Text variant="price" color="primary" fontSize={18}>
                $ {price} USD
              </Text>
            </Box>
            <Button
              label="Add to basket"
              variant="primary"
              onPress={() => {}}
            />
          </Box>
        </Container>
      </AnimatedBox>
    </PanGestureHandler>
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
