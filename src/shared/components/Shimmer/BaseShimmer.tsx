import React, {FC, ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  interpolate,
  Extrapolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import {AnimatedBox, Box} from '@atoms';

interface BaseShimmerProps {
  children?: ReactNode;
  colors: string[];
  height: number;
  location: number[];
  progress: SharedValue<number>;
  shimmerStyle?: ViewStyle;
  visible: boolean;
  width: number;
}

const BaseShimmer: FC<BaseShimmerProps> = ({
  children,
  colors,
  height,
  location,
  progress,
  shimmerStyle,
  visible,
  width,
}) => {
  const translate = useDerivedValue(() => {
    return interpolate(
      progress.value,
      [-1, 1],
      [-width, width],
      Extrapolate.CLAMP,
    );
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translate.value}],
    };
  });

  return (
    <Box
      style={[
        styles.container,
        !visible && {width, height},
        !visible && shimmerStyle,
      ]}>
      <Box style={!visible && styles.hiden}>{children}</Box>
      {!visible && (
        <Box flex={1} style={{backgroundColor: colors[0]}}>
          <AnimatedBox flex={1} style={rStyle}>
            <LinearGradient
              colors={colors}
              style={[styles.flex, {width}]}
              start={{
                x: -1,
                y: 0.5,
              }}
              end={{
                x: 2,
                y: 0.5,
              }}
              locations={location}
            />
          </AnimatedBox>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
  },
  hiden: {
    height: 0,
    opacity: 0,
    width: 0,
  },
});

export default BaseShimmer;
