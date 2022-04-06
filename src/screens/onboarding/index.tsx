import React, {useCallback} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Box, Button} from '@components';
import {useTheme} from '@config/theme';

import {slides} from './constanst';
import Slide from './slide';
import Dot from './dot';

const {width} = Dimensions.get('window');

const OnboardingScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Onboarding'>) => {
  const translateX = useSharedValue(0);
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const {t} = useTranslation();
  const scrollRef = useAnimatedRef<ScrollView>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event: NativeScrollEvent) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const currentIndex = useDerivedValue(() => {
    return translateX.value / (width - 2 * theme.spacing.s);
  });

  const onPressNext = useCallback(() => {
    if (currentIndex.value === slides.length - 1) {
      navigation.replace('SignUp');
      return;
    }
    scrollRef.current?.scrollTo({
      x: (width - 2 * theme.spacing.s) * (currentIndex.value + 1),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const background = useDerivedValue(() => {
    return interpolateColor(
      translateX.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color),
      'RGB',
    );
  });

  const bgStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: background.value,
      flex: 1,
      paddingBottom: insets.bottom,
      paddingHorizontal: theme.spacing.s,
      paddingTop: insets.top,
    };
  });

  return (
    <Animated.View style={bgStyle}>
      <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        pagingEnabled
        ref={scrollRef as any}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        {slides.map((slide, index) => (
          <Slide
            title={slide.title}
            image={slide.image}
            index={index}
            currentIndex={currentIndex}
            key={slide.title.replace('', '_').toLowerCase()}
          />
        ))}
      </Animated.ScrollView>
      <Box justifyContent="space-around" alignItems="center" flex={0.35}>
        <Box flexDirection="row">
          {slides.map(({title}, index) => (
            <Dot
              key={`dot__${title.replace('', '_').toLowerCase()}`}
              {...{index, currentIndex: currentIndex}}
            />
          ))}
        </Box>
        <Button
          label={t('common.next')}
          variant="secondary"
          onPress={onPressNext}
        />
      </Box>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
  },
});

export default OnboardingScreen;
