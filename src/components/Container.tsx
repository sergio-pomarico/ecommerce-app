import React, {FC, ReactNode, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Box} from 'components';

const {height: screenHeight} = Dimensions.get('window');

interface ContainerProps {
  children: ReactNode;
  background: string;
}

const Container: FC<ContainerProps> = ({children, background}) => {
  const [height, setHeight] = useState(0);
  const scrollEnabled = height > screenHeight;
  const bg = {backgroundColor: background};

  const onContentSizeChange = (_contentWidth: number, contentHeight: number) =>
    setHeight(contentHeight);

  return (
    <SafeAreaView style={[styles.container, bg]}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.content}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={onContentSizeChange}>
        <Box flexGrow={1} padding="s">
          {children}
        </Box>
      </ScrollView>
    </SafeAreaView>
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
