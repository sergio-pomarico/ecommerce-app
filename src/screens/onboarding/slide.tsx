import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Box, Text} from '@components';
import {makeStyle, Theme} from '@config/theme';

interface SlideProps {
  title: string;
  image: any;
  index: number;
  currentIndex: SharedValue<number>;
}

const {height, width} = Dimensions.get('window');

const Slide: FC<SlideProps> = ({title, image, index, currentIndex}) => {
  const inputRange = [index - 1, index, index + 1];
  const textStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      inputRange,
      [-1, 1, -1],
      Extrapolate.CLAMP,
    );
    const translateY = interpolate(
      currentIndex.value,
      inputRange,
      [-height / 2, 0, height / 2],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          translateY,
        },
      ],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
    };
  });

  const styles = useStyles();
  return (
    <Box style={styles.slide}>
      <Animated.View style={[textStyle, styles.text]}>
        <Text variant="hero">{title}</Text>
      </Animated.View>
      <Animated.Image source={image} style={[styles.image, imageStyle]} />
    </Box>
  );
};
const useStyles = makeStyle((theme: Theme) => ({
  image: {
    height: 400,
    resizeMode: 'contain',
    width: undefined,
    zIndex: 1,
  },
  text: {
    marginTop: theme.spacing.m,
    zIndex: -1,
  },
  slide: {
    height: undefined,
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: width - 2 * theme.spacing.s,
  },
}));

export default Slide;
