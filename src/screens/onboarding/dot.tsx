import React, {FC} from 'react';

import {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {AnimatedBox} from '@atoms';

interface DotProps {
  index: number;
  currentIndex: SharedValue<number>;
}

const Dot: FC<DotProps> = ({index, currentIndex}) => {
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
  return (
    <AnimatedBox
      height={16}
      borderRadius="m"
      marginRight="s"
      backgroundColor="white"
      width={16}
      style={dotStyle}
    />
  );
};

export default Dot;
