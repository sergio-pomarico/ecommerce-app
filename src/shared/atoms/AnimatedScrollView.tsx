import * as React from 'react';
import {ScrollViewProps} from 'react-native';
import Animated, {AnimateProps} from 'react-native-reanimated';
import {createBox} from '@shopify/restyle';
import {Theme} from '@config/theme';

const AnimatedScrollView = createBox<Theme, AnimateProps<ScrollViewProps>>(
  Animated.ScrollView,
);

export type AnimatedScrollViewProps = React.ComponentProps<
  typeof AnimatedScrollView
>;
export default AnimatedScrollView;
