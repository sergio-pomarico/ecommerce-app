import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {makeStyle, Theme} from '@config/theme';
import {AnimatedBox} from '@atoms';

interface BubbleProps {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
}

const Bubble = ({progress, start, end}: BubbleProps) => {
  const styles = useStyles();
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP,
    );
    const scale = interpolate(
      progress.value,
      [start, end],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {opacity, transform: [{scale}]};
  });
  return <AnimatedBox style={[styles.bubble, style]} />;
};

const useStyles = makeStyle((theme: Theme) => ({
  bubble: {
    width: theme.spacing.m,
    height: theme.spacing.m,
    borderRadius: theme.spacing.m / 2,
    backgroundColor: theme.colors.white,
    transform: [
      {
        scale: 0,
      },
    ],
  },
}));

export default Bubble;
