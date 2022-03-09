import React, {FC, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {Box} from '@components';

import Bubble from './Bubble';

const {width: wWidth} = Dimensions.get('window');
const width = wWidth * 0.45;
const easing = Easing.inOut(Easing.ease);

interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = ({}) => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1500,
        easing,
      }),
      -1,
    );
  }, [progress]);
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Box
        width={width}
        height={width}
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center">
        {bubbles.map(i => {
          const start = i * delta;
          const end = start + delta;
          return <Bubble key={i} {...{start, end, progress}} />;
        })}
      </Box>
    </Box>
  );
};

export default Spinner;
