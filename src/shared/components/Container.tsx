import React, {FC, ReactNode, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';

import {Box} from '@components';

const {height: screenHeight} = Dimensions.get('window');

interface ContainerProps {
  children: ReactNode;
  background: string;
}

const Container: FC<ContainerProps> = ({children, background}) => {
  const insets = useSafeAreaInsets();
  const [height, setHeight] = useState(0);
  const scrollEnabled = height > screenHeight;
  const bg = {
    backgroundColor: background,
    paddingTop: insets.top,
    paddingBotton: insets.bottom,
  };

  const onContentSizeChange = (_contentWidth: number, contentHeight: number) =>
    setHeight(contentHeight);

  return (
    <Box style={[styles.container, bg]}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.content}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={onContentSizeChange}>
        <Box flexGrow={1}>{children}</Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});

export default Container;
