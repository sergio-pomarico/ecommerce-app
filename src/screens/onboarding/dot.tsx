import React, {FC} from 'react';
import {makeStyle, Theme} from '@config/theme';

import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: SharedValue<number>;
}

const Dot: FC<DotProps> = ({index, currentIndex}) => {
  const styles = useStyles();
  const dotStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP,
    );
    return {opacity, transform: [{scale}]};
  });
  return <Animated.View style={[styles.dot, dotStyle]} />;
};

const useStyles = makeStyle((theme: Theme) => ({
  dot: {
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    height: 12,
    margin: 4,
    width: 12,
  },
}));

export default Dot;
