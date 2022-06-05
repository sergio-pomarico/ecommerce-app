import React, {useState, useEffect, ReactNode, Children} from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';

import {Box, Text} from '@components';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {makeStyle, Theme} from '@config/theme';

interface Tab {
  title: string;
  id: string;
}

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

const {width} = Dimensions.get('screen');

const Tabs = ({tabs, children}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const linePosition = useSharedValue(0);
  const contentPosition = useSharedValue(0);

  useEffect(() => {
    linePosition.value =
      (2 * selectedIndex + 1) * (1 / (tabs.length * 2)) * width - 30;
    contentPosition.value = selectedIndex;
  }, [linePosition, contentPosition, selectedIndex, tabs.length]);

  const lineTransition = useDerivedValue(() => {
    return withSpring(linePosition.value);
  });

  const contentTransition = useDerivedValue(() => {
    return withSpring(contentPosition.value);
  });

  const line = useAnimatedStyle(() => {
    return {
      transform: [{translateX: lineTransition.value}],
    };
  });

  const content = useAnimatedStyle(() => ({
    transform: [{translateX: -width * contentTransition.value}],
  }));

  const styles = useStyles();

  return (
    <Box flex={1}>
      <Box
        flexDirection="row"
        marginVertical="m"
        justifyContent="space-between">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => setSelectedIndex(index)}
            key={tab.id}>
            <Box paddingVertical="xs">
              <Text textAlign="center">{tab.title}</Text>
            </Box>
          </TouchableOpacity>
        ))}
        <Animated.View style={[styles.line, line]} />
      </Box>
      <Animated.View
        style={[styles.tab, content, {width: tabs.length * width}]}>
        {Children.map(children, (child, i) => (
          <Box flex={1} key={i} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  container: {
    flex: 1,
    width: '25%',
  },
  line: {
    backgroundColor: theme.colors.primary,
    bottom: 0,
    height: 2,
    left: 0,
    position: 'absolute',
    width: 60,
  },
  tab: {
    flexDirection: 'row',
  },
}));

export default Tabs;
