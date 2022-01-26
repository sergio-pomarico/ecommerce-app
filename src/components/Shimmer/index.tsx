import React, {FC, ReactNode, useEffect} from 'react';
import {ViewStyle} from 'react-native';

import BaseShimmer from './BaseShimmer';
import {
  Easing,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface ShimmerProps {
  children?: ReactNode;
  colors?: string[];
  delay?: number;
  height: number;
  location?: number[];
  shimmerStyle?: ViewStyle;
  visible: boolean;
  width: number;
}

const Shimmer: FC<ShimmerProps> = ({
  children,
  colors = ['#ebebeb', '#c5c5c5', '#ebebeb'],
  delay = 0,
  height,
  location = [0.3, 0.5, 0.7],
  shimmerStyle,
  visible,
  width,
}) => {
  const progress = useSharedValue(-1);
  useEffect(() => {
    progress.value = withRepeat(
      withDelay(
        delay,
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
      ),
      -1,
    );
  }, [progress, delay]);
  return (
    <BaseShimmer
      {...{colors, height, location, progress, shimmerStyle, visible, width}}>
      {children}
    </BaseShimmer>
  );
};

export default Shimmer;
